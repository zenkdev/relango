export default function getFieldName(testId: string, itemId: string | number, fieldIndex?: number): string {
  return `test:${testId}::item:${itemId}${fieldIndex != null ? `::field:${fieldIndex}` : ''}`;
}
