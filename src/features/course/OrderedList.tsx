import React from 'react';

import { TestField, TestItem } from '../../models';
import FormField from './FormField';

type OrderedListProps = {
  testId: string;
  items: TestItem[];
  columns?: number;
};

const OrderedList: React.FC<OrderedListProps> = ({ testId, items, columns }) => (
  <ol className="tests-orderedList" style={{ columnCount: columns }}>
    {items.map(({ id: itemId, fields }) => (
      <li key={`test:${testId}::item:${itemId}`}>
        {fields.map((part: TestField, m: number) => {
          const name = `test:${testId}::item:${itemId}::field:${m}`;
          return <FormField key={name} name={name} field={part} />;
        })}
      </li>
    ))}
  </ol>
);

export default OrderedList;
