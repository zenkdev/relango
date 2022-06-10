export default function ensureArray<T>(val: T): T extends any[] ? T : T[] {
  return Array.isArray(val) ? val : ([val] as any);
}
