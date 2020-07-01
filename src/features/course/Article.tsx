import { Typography } from 'antd';
import React, { Fragment } from 'react';

import { QuestionPart, TestItem } from '../../models';
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
          <Typography.Title level={4} className="tests-article_title">
            {title}
          </Typography.Title>
        )}
        <p className="tests-article_content">
          {fields.map((part: QuestionPart, m: number) => {
            const name = `test:${testId}::item:${itemId}::field:${m}`;
            return <FormField key={name} name={name} part={part} />;
          })}
        </p>
      </Fragment>
    ))}
  </div>
);

export default Article;
