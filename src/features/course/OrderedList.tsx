import React from 'react';

import { QuestionPart, Task } from '../../models';
import FormField from './FormField';

type OrderedListProps = {
  testId: string;
  tasks: Task[];
  columns?: number;
};

const OrderedList: React.FC<OrderedListProps> = ({ testId, tasks, columns }) => (
  <ol className="tests-orderedList" style={{ columnCount: columns }}>
    {tasks.map(({ id: taskId, fields }) => (
      <li key={`test:${testId}::task:${taskId}`}>
        {fields.map((part: QuestionPart, m: number) => {
          const name = `test:${testId}::task:${taskId}::field:${m}`;
          return <FormField key={name} name={name} part={part} />;
        })}
      </li>
    ))}
  </ol>
);

export default OrderedList;
