import { Typography } from 'antd';
import React, { Fragment } from 'react';

import { QuestionPart, Task } from '../../models';
import FormField from './FormField';

type ArticleProps = {
  testId: string;
  tasks: Task[];
  columns?: number;
};

const Article: React.FC<ArticleProps> = ({ testId, tasks, columns }) => (
  <div className="tests-article" style={{ columnCount: columns }}>
    {tasks.map(({ id: taskId, title, fields }) => (
      <Fragment key={`test:${testId}::task:${taskId}`}>
        {title && (
          <Typography.Title level={4} className="tests-article_title">
            {title}
          </Typography.Title>
        )}
        <p className="tests-article_content">
          {fields.map((part: QuestionPart, m: number) => {
            const name = `test:${testId}::task:${taskId}::field:${m}`;
            return <FormField key={name} name={name} part={part} />;
          })}
        </p>
      </Fragment>
    ))}
  </div>
);

export default Article;
