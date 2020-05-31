import { Button, PageHeader } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { BackwardOutlined, ForwardOutlined } from '@ant-design/icons';

import { Lesson } from '../../models';

type LessonContentProps = { lesson: Lesson; prev?: string; next?: string };

const LessonContent: React.FC<LessonContentProps> = ({ lesson, prev, next }) => {
  const extra: any[] = [];
  if (prev) {
    extra.push(<Button key="prev" type="primary" icon={<BackwardOutlined />} href={prev} />);
  }
  if (next) {
    extra.push(<Button key="next" type="primary" icon={<ForwardOutlined />} href={next} />);
  }
  return (
    <div>
      <PageHeader title={lesson.name} subTitle={lesson.subject} extra={extra}>
        <p>{lesson.description}</p>
      </PageHeader>
      {lesson.content && <ReactMarkdown source={lesson.content} />}
    </div>
  );
};

export default LessonContent;
