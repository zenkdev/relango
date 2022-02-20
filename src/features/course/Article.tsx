import { Typography } from 'antd';
import React, { Fragment } from 'react';

import { TestField, TestItem } from '../../models';
import FormField from './FormField';
import getFieldName from './utils/getFieldName';

interface ArticleProps {
  testId: string;
  items: TestItem[];
  columns?: number;
}

function Article({ testId, items, columns }: ArticleProps) {
  return (
    <div className="tests-article" style={{ columnCount: columns }}>
      {items.map(({ id: itemId, title, fields }) => (
        <Fragment key={getFieldName(testId, itemId)}>
          {title && (
            <Typography.Title level={4} className="tests-articleTitle">
              {title}
            </Typography.Title>
          )}
          <p className="tests-articleContent">
            {fields.map((field: TestField, m: number) => {
              const name = getFieldName(testId, itemId, m);
              return <FormField key={name} name={name} field={field} />;
            })}
          </p>
        </Fragment>
      ))}
    </div>
  );
}

export default Article;
