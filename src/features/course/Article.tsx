import { Typography } from 'antd';
import React, { Fragment } from 'react';

import { TestField, TestItem } from '../../models';
import FormField from './FormField';

type ArticleProps = {
  testId: string;
  items: TestItem[];
  columns?: number;
};

const Article: React.FC<ArticleProps> = ({ testId, items, columns }) => (
  <div className="tests-article" style={{ columnCount: columns }}>
    {items.map(({ id: itemId, title, fields }) => (
      <Fragment key={`test:${testId}::item:${itemId}`}>
        {title && (
          <Typography.Title level={4} className="tests-articleTitle">
            {title}
          </Typography.Title>
        )}
        <p className="tests-articleContent">
          {fields.map((part: TestField, m: number) => {
            const name = `test:${testId}::item:${itemId}::field:${m}`;
            return <FormField key={name} name={name} field={part} />;
          })}
        </p>
      </Fragment>
    ))}
  </div>
);

export default Article;
