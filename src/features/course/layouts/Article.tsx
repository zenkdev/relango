import React, { CSSProperties } from 'react';

import { TestField, TestItem } from '../../../models';
import { FormField } from '../form-fields';
import getFieldName from '../utils/getFieldName';
import styles from './Layout.module.scss';

interface ArticleProps {
  testId: string;
  items: TestItem[];
  columns?: number;
}

function Article({ testId, items, columns }: ArticleProps) {
  const style = React.useMemo(() => {
    if (columns && columns > 1) {
      return {
        gridTemplateColumns:
          'auto ' +
          Array(columns - 1)
            .fill('max-content')
            .join(' '),
      } as CSSProperties;
    }
    return undefined;
  }, [columns]);

  return (
    <div className={styles.article} style={style}>
      {items.map(({ id: itemId, fields }) => (
        <div key={getFieldName(testId, itemId)} className={styles.article__content}>
          {fields.map((field: TestField, m: number) => {
            const name = getFieldName(testId, itemId, m);
            return <FormField key={name} name={name} field={field} />;
          })}
        </div>
      ))}
    </div>
  );
}

export default Article;
