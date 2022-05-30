import { TestField, TestItem } from '../../../models';
import { FormField } from '../form-fields';
import getFieldName from '../utils/getFieldName';
import styles from './Layout.module.scss';

interface ListProps {
  testId: string;
  items: TestItem[];
  columns?: number;
  start?: number;
}

function List({ testId, items, columns, start }: ListProps) {
  return (
    <ol className={styles.list} style={{ columnCount: columns }} start={start}>
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

export default List;
