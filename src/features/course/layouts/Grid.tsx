import { CSSProperties } from 'react';

import { TestField, TestItem } from '../../../models';
import { FormField } from '../form-fields';
import getFieldName from '../utils/getFieldName';
import styles from './Layout.module.scss';

interface GridProps {
  testId: string;
  items: TestItem[];
  columns?: number;
}

function getGridStyle(columns?: number): CSSProperties | undefined {
  if (columns && columns > 1) {
    return { gridTemplateColumns: Array(columns).fill('1fr').join(' ') };
  }
  return undefined;
}

function Grid({ testId, items, columns }: GridProps) {
  return (
    <div className={styles.grid} style={getGridStyle(columns)}>
      {items.map(({ id: itemId, fields }) => (
        <div key={getFieldName(testId, itemId)} className={styles.grid__cell}>
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
