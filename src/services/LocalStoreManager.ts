/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
import { jsonTryParse } from '../utils';

/**
 * Provides a wrapper for accessing the web storage API and synchronizing session storage across tabs/windows.
 */
class LocalStoreManager {
  private reservedKeys: string[] = [
    'sync_keys',
    'addToSyncKeys',
    'removeFromSyncKeys',
    'getSessionStorage',
    'setSessionStorage',
    'addToSessionStorage',
    'removeFromSessionStorage',
    'clearAllSessionsStorage',
  ];

  public clearAllStorage(): void {
    this.clearSessionStorage();
    this.clearLocalStorage();
  }

  public clearSessionStorage(): void {
    sessionStorage.clear();
  }

  public clearLocalStorage(): void {
    localStorage.clear();
  }

  public saveSessionData(key: string, data: any): void {
    this.testForInvalidKeys(key);

    localStorage.removeItem(key);
    this.sessionStorageSetItem(key, data);
  }

  public savePermanentData(key: string, data: any): void {
    this.testForInvalidKeys(key);

    sessionStorage.removeItem(key);
    this.localStorageSetItem(key, data);
  }

  public moveDataToSessionStorage(key: string): void {
    this.testForInvalidKeys(key);

    const data = this.getData(key);

    if (data == null) {
      return;
    }

    this.saveSessionData(data, key);
  }

  public moveDataToPermanentStorage(key: string): void {
    this.testForInvalidKeys(key);

    const data = this.getData(key);

    if (data == null) {
      return;
    }

    this.savePermanentData(data, key);
  }

  public exists(key: string): boolean {
    let data = sessionStorage.getItem(key);

    if (data == null) {
      data = localStorage.getItem(key);
    }

    return data != null;
  }

  public getData(key: string): any {
    this.testForInvalidKeys(key);

    let data = this.sessionStorageGetItem(key);

    if (data == null) {
      data = this.localStorageGetItem(key);
    }

    return data;
  }

  public getDataObject<T>(key: string, isDateType = false): T | null {
    let data = this.getData(key);

    if (data != null) {
      if (isDateType) {
        data = new Date(data);
      }
      return data as T;
    }
    return null;
  }

  public deleteData(key: string): void {
    this.testForInvalidKeys(key);

    sessionStorage.removeItem(key);
    localStorage.removeItem(key);
  }

  private testForInvalidKeys(key: string) {
    if (!key) {
      throw new Error('key cannot be empty');
    }

    if (this.reservedKeys.some(x => x === key)) {
      throw new Error(`The storage key "${key}" is reserved and cannot be used. Please use a different key`);
    }
  }

  private localStorageSetItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  private sessionStorageSetItem(key: string, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  private localStorageGetItem(key: string) {
    return jsonTryParse(localStorage.getItem(key));
  }

  private sessionStorageGetItem(key: string) {
    return jsonTryParse(sessionStorage.getItem(key));
  }
}

class ExtendedLocalStoreManager extends LocalStoreManager {
  public getModule(courseId: string) {
    const key = this.getModuleKey(courseId);
    return this.getDataObject<string>(key);
  }

  public setModule(courseId: string, moduleId: string) {
    const key = this.getModuleKey(courseId);
    this.savePermanentData(key, moduleId);
  }

  public deleteModule(courseId: string) {
    const key = this.getModuleKey(courseId);
    this.deleteData(key);
  }

  private getModuleKey(courseId: string) {
    return `relango::course:${courseId}::module`;
  }
}

export default new ExtendedLocalStoreManager();
