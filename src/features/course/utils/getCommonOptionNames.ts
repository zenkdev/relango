import { Test, TestField } from '../../../models';
import getFieldName from './getFieldName';

const useCommonOptions = (field: TestField) => {
  if ('useCommonOptions' in field && field.useCommonOptions) {
    return true;
  }
  if (field.type === 'select' && !field.options?.length) {
    return true;
  }
  return false;
};

export default function getCommonOptionNames({ id: testId, items }: Test): string[] {
  const commonOptionNames: string[] = [];

  items.forEach(({ id: itemId, fields }) =>
    fields.forEach((field, m) => {
      if (useCommonOptions(field)) {
        commonOptionNames.push(getFieldName(testId, itemId, m));
      }
    }),
  );

  return commonOptionNames;
}
