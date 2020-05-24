/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint no-dupe-class-members: "off" */
import Observable from 'zen-observable';

import { safeStringify, splitInTwo } from '../utils';

export enum DialogType {
  alert,
  confirm,
  prompt,
}

export type AlertDialog = {
  message: string;
  type: DialogType;
  onOk?: (val?: any) => any;
  onCancel?: () => any;
  okText?: string;
  cancelText?: string;
  autoFocusButton?: null | 'ok' | 'cancel';
};

export enum MessageSeverity {
  default,
  info,
  success,
  error,
  warn,
  wait,
}

export interface AlertMessage {
  severity: MessageSeverity;
  summary: string;
  detail?: string;
}

class AlertService {
  private messages$: Observable<AlertMessage>;

  private messagesObserver!: ZenObservable.SubscriptionObserver<AlertMessage>;

  private stickyMessages$: Observable<AlertMessage>;

  private stickyMessagesObserver!: ZenObservable.SubscriptionObserver<AlertMessage>;

  private dialogs$: Observable<AlertDialog>;

  private dialogsObserver!: ZenObservable.SubscriptionObserver<AlertDialog>;

  private isLoading = false;

  private loadingMessageId: any;

  constructor() {
    this.messages$ = new Observable<AlertMessage>(observer => {
      this.messagesObserver = observer;
    });
    this.stickyMessages$ = new Observable<AlertMessage>(observer => {
      this.stickyMessagesObserver = observer;
    });
    this.dialogs$ = new Observable<AlertDialog>(observer => {
      this.dialogsObserver = observer;
    });
  }

  public showDialog(message: string): void;

  public showDialog(message: string, type: DialogType, onOk: (val?: any) => any, onCancel?: () => any): void;

  public showDialog(
    message: string,
    type?: DialogType,
    onOk?: (val?: any) => any,
    onCancel?: () => any,
    okText?: string,
    cancelText?: string,
    autoFocusButton?: null | 'ok' | 'cancel',
  ): void {
    const ensureType = type || DialogType.alert;
    this.dialogsObserver.next({ message, type: ensureType, onOk, onCancel, okText, cancelText, autoFocusButton });
  }

  public showMessage(summary: string): void;

  public showMessage(summary: string, detail: string, severity: MessageSeverity): void;

  // public showMessage(summaryAndDetails: string[], summaryAndDetailsSeparator: string, severity: MessageSeverity);
  // showMessage(response: HttpResponseBase, ignoreValue_useNull: string, severity: MessageSeverity);
  public showMessage(data: any, separatorOrDetail?: string, severity?: MessageSeverity): void {
    const ensureSeverity = severity || MessageSeverity.default;

    // if (data instanceof HttpResponseBase) {
    //   data = Utilities.getHttpResponseMessage(data);
    //   separatorOrDetail = Utilities.captionAndMessageSeparator;
    // }

    if (data instanceof Array) {
      for (const message of data) {
        const [firstPart, secondPart] = splitInTwo(message, separatorOrDetail);
        this.showMessageHelper(firstPart, secondPart, ensureSeverity, false);
      }
    } else {
      this.showMessageHelper(data, separatorOrDetail, ensureSeverity, false);
    }
  }

  public showStickyMessage(summary: string): void;

  public showStickyMessage(summary: string, detail: string, severity: MessageSeverity, error?: any): void;

  public showStickyMessage(summaryAndDetails: string[], summaryAndDetailsSeparator: string, severity: MessageSeverity): void;

  // public showStickyMessage(response: HttpResponseBase, ignoreValue_useNull: string, severity: MessageSeverity);
  // public showStickyMessage(data: string | string[] | HttpResponseBase, separatorOrDetail?: string, severity?: MessageSeverity, error?: any) {
  public showStickyMessage(data: string | string[], separatorOrDetail?: string, severity?: MessageSeverity, error?: any): void {
    const ensureSeverity = severity || MessageSeverity.default;

    // if (data instanceof HttpResponseBase) {
    //   data = Utilities.getHttpResponseMessage(data);
    //   separatorOrDetail = Utilities.captionAndMessageSeparator;
    // }

    if (data instanceof Array) {
      for (const message of data) {
        const [firstPart, secondPart] = splitInTwo(message, separatorOrDetail);
        this.showMessageHelper(firstPart, secondPart, ensureSeverity, true);
      }
    } else {
      if (error) {
        const msg = `Severity: "${
          MessageSeverity[ensureSeverity]
        }", Summary: "${data}", Detail: "${separatorOrDetail}", Error: "${safeStringify(error)}"`;

        switch (ensureSeverity) {
          case MessageSeverity.info:
            this.logInfo(msg);
            break;
          case MessageSeverity.success:
            this.logMessage(msg);
            break;
          case MessageSeverity.error:
            this.logError(msg);
            break;
          case MessageSeverity.warn:
            this.logWarning(msg);
            break;
          case MessageSeverity.wait:
            this.logTrace(msg);
            break;
          case MessageSeverity.default:
          default:
            this.logInfo(msg);
            break;
        }
      }

      this.showMessageHelper(data, separatorOrDetail, ensureSeverity, true);
    }
  }

  public showValidationError(): void {
    this.resetStickyMessage();
    this.showStickyMessage(
      'Missing Information',
      'You have entered invalid or incomplete information. Please correct any errors and try again.',
      MessageSeverity.error,
    );
  }

  public showError = (error: string | Error): void => {
    const message = typeof error === 'string' ? error : error.message;
    this.showStickyMessage(message, '', MessageSeverity.error);
  };

  private showMessageHelper(summary: string, detail: string | undefined, severity: MessageSeverity, isSticky: boolean): void {
    if (isSticky) {
      this.stickyMessagesObserver.next({ severity, summary, detail });
    } else {
      this.messagesObserver.next({ severity, summary, detail });
    }
  }

  public startLoadingMessage(message = 'Loading...', caption = ''): void {
    this.isLoading = true;
    clearTimeout(this.loadingMessageId);

    this.loadingMessageId = setTimeout(() => {
      this.showStickyMessage(caption, message, MessageSeverity.wait);
    }, 1000);
  }

  public stopLoadingMessage(): void {
    this.isLoading = false;
    clearTimeout(this.loadingMessageId);
    this.resetStickyMessage();
  }

  public logDebug(msg: string) {
    console.debug(msg);
  }

  public logError(msg: string) {
    console.error(msg);
  }

  public logInfo(msg: string) {
    console.info(msg);
  }

  public logMessage(msg: string) {
    console.log(msg);
  }

  public logTrace(msg: string) {
    console.trace(msg);
  }

  public logWarning(msg: string) {
    console.warn(msg);
  }

  public resetStickyMessage() {
    this.stickyMessagesObserver.next(null as any);
  }

  public subscribeDialogs = (
    onNext: (value: AlertDialog) => void,
    onError?: (error: any) => void,
    onComplete?: () => void,
  ): ZenObservable.Subscription => this.dialogs$.subscribe(onNext, onError, onComplete);

  public subscribeMessages = (
    onNext: (value: AlertMessage) => void,
    onError?: (error: any) => void,
    onComplete?: () => void,
  ): ZenObservable.Subscription => this.messages$.subscribe(onNext, onError, onComplete);

  public subscribeStickyMessages = (
    onNext: (value: AlertMessage) => void,
    onError?: (error: any) => void,
    onComplete?: () => void,
  ): ZenObservable.Subscription => this.stickyMessages$.subscribe(onNext, onError, onComplete);

  get isLoadingInProgress(): boolean {
    return this.isLoading;
  }
}

export default new AlertService();
