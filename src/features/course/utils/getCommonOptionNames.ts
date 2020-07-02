import { Test, TestField, TestItem } from '../../../models';

export default function getCommonOptionNames({ id: testId, items }: Test) {
  return items.reduce(
    (result: string[], { id: itemId, fields }: TestItem) =>
      result.concat(
        ...fields.reduce((acc: string[], part: TestField, m: number) => {
          if ((part.type === 'singleChoice' || part.type === 'openText') && part.useCommonOptions) {
            return [...acc, `test:${testId}::item:${itemId}::field:${m}`];
          }
          return acc;
        }, []),
      ),
    [],
  );
}
