import React from 'react';

import { TestField, TestItem } from '../../models';
import FormField from './FormField';
import getFieldName from './utils/getFieldName';

interface GridProps {
  testId: string;
  items: TestItem[];
  columns?: number;
}

function Grid({ testId, items, columns }: GridProps) {
  return (
    <div className={`tests-grid${columns ? ` tests-grid--cols${columns}` : ''}`}>
      {items.map(({ id: itemId, fields }) => (
        <div key={getFieldName(testId, itemId)} className="tests-grid_cell">
          {fields.map((field: TestField, m: number) => {
            const name = getFieldName(testId, itemId, m);
            return <FormField key={name} name={name} field={field} />;
          })}
        </div>
      ))}
    </div>
  );
}

export default Grid;
