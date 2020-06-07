import { Form, Input, Select, Typography } from 'antd';
import { Rule } from 'antd/lib/form';
import React from 'react';

import { QuestionPart, Test } from '../../models';

const renderPart = (part: QuestionPart) => {
  if (part.type === 'staticText') {
    return <Typography.Text strong={part.bold}>{part.value}</Typography.Text>;
  }
  if (part.type === 'newLine') {
    return <br />;
  }
  if (part.type === 'singleChoice') {
    return (
      <Select
        style={{ width: 120 }}
        onChange={(...args: any[]) => {
          console.log(args);
        }}
      >
        {part.options.map(opt => (
          <Select.Option value={opt}>{opt}</Select.Option>
        ))}
      </Select>
    );
  }
  if (part.type === 'openText') {
    return <Input type="text" maxLength={part.maxLength} style={{ width: 120 }} />;
  }
  return null;
};

type TestContentProps = { test: Test };

const TestContent: React.FC<TestContentProps> = ({ test }) => {
  return (
    <Form name="basic">
      <Typography.Title level={3}>{test.title}</Typography.Title>
      <ol style={{ textAlign: 'left' }}>
        {test.questions.map((parts: QuestionPart[], n: number) => (
          <li>
            {parts.map((part: QuestionPart, m: number) => {
              const rules: Rule[] = [];
              if (part.type === 'singleChoice') {
                rules.push({
                  type: 'string',
                  validator: (_: any, value: string, callback: (error?: string) => void) => {
                    if (!value) {
                      callback('Please select!');
                    } else if (part.value !== value) {
                      callback(part.value);
                    } else {
                      callback();
                    }
                  },
                });
              }
              // if (part.type === 'openText') {
              //   rules = [
              //     {
              //       required: true,
              //       message: 'Please type!',
              //     },
              //     () => ({
              //       validator(rule: any, value: string) {
              //         console.log(rule);
              //         if (part.value === value) {
              //           return '';
              //         }

              //         return part.value;
              //       },
              //     }),
              //   ];
              // }
              return (
                <Form.Item name={`${test.id}_${n}_${m}`} rules={rules} validateTrigger="onChange" noStyle>
                  {renderPart(part)}
                </Form.Item>
              );
            })}
          </li>
        ))}
      </ol>
    </Form>
  );
};

export default TestContent;
