import { Test } from '../../../models';
import getFieldName from './getFieldName';

export default function getCommonOptionNames({ id: testId, items }: Test): string[] {
  const commonOptionNames: string[] = [];

  items.forEach(({ id: itemId, fields }) =>
    fields.forEach((field, m) => {
      if ((field.type === 'singleChoice' || field.type === 'openText') && field.useCommonOptions) {
        commonOptionNames.push(getFieldName(testId, itemId, m));
      }
    }),
  );

  return commonOptionNames;
}
