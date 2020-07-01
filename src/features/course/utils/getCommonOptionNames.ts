import { Test, QuestionPart, Task } from '../../../models';

export default function getCommonOptionNames({ id: testId, questions, tasks }: Test) {
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
  return tasks.reduce(
    (result: string[], { id: taskId, fields }: Task) =>
      result.concat(
        ...fields.reduce((acc: string[], part: QuestionPart, m: number) => {
          if ((part.type === 'singleChoice' || part.type === 'openText') && part.useCommonOptions) {
            return [...acc, `test:${testId}::task:${taskId}::field:${m}`];
          }
          return acc;
        }, []),
      ),
    [],
  );
}
