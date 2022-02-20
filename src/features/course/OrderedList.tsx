import React from 'react';

import { TestField, TestItem } from '../../models';
import FormField from './FormField';
import getFieldName from './utils/getFieldName';

interface OrderedListProps {
  testId: string;
  items: TestItem[];
  columns?: number;
}

function OrderedList({ testId, items, columns }: OrderedListProps) {
  return (
    <ol className="tests-orderedList" style={{ columnCount: columns }}>
      {items.map(({ id: itemId, fields }) => (
        <li key={getFieldName(testId, itemId)}>
          {fields.map((field: TestField, m: number) => {
            const name = getFieldName(testId, itemId, m);
            return <FormField key={name} name={name} field={field} />;
          })}
        </li>
      ))}
    </ol>
  );
}

export default OrderedList;
