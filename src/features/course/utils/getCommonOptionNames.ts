import { Test, QuestionPart, TestItem } from '../../../models';

export default function getCommonOptionNames({ id: testId, questions, items }: Test) {
  if (questions) {
    return questions.reduce(
      (result: string[], parts: QuestionPart[], n: number) =>
        result.concat(
          ...parts.reduce((acc: string[], part: QuestionPart, m: number) => {
            if ((part.type === 'singleChoice' || part.type === 'openText') && part.useCommonOptions) {
              return [...acc, `${testId}_${n}_${m}`];
            }
            return acc;
          }, []),
        ),
      [],
    );
  }
  return items.reduce(
    (result: string[], { id: itemId, fields }: TestItem) =>
      result.concat(
        ...fields.reduce((acc: string[], part: QuestionPart, m: number) => {
          if ((part.type === 'singleChoice' || part.type === 'openText') && part.useCommonOptions) {
            return [...acc, `test:${testId}::item:${itemId}::field:${m}`];
          }
          return acc;
        }, []),
      ),
    [],
  );
}
