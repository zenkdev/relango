import { Store } from 'antd/lib/form/interface';

import { Test, TestField } from '../../../models';
import getFieldName from './getFieldName';

export default function mergeModuleContent(
  test: Test,
  storedValues?: Record<string, Store>,
  moduleContent?: Record<string, Store>,
): Record<string, Store> {
  const testContent: Record<string, Store> = {};
  test.items.forEach(item => {
    item.fields.forEach((field: TestField, m: number) => {
      const name = getFieldName(test.id, item.id, m);
      const value = storedValues?.[name];
      if (value) {
        testContent[name] = value;
      }
    });
  });

  if (moduleContent) {
    return { ...moduleContent, [test.id]: testContent };
  }
  return { [test.id]: testContent };
}
