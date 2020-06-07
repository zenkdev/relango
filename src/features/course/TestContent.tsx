/* eslint-disable react/no-array-index-key */
import { Button, Form, Input, Select, Typography, Tooltip } from 'antd';
import { Rule } from 'antd/lib/form';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import React, { useCallback, useState, Fragment } from 'react';

import { WarningOutlined } from '@ant-design/icons';

import { QuestionPart, Test } from '../../models';

const getErrors = (errorFields: ValidateErrorEntity['errorFields'], name: string) => {
  const errorField = errorFields.find(x => x.name[0] === name);
  return errorField?.errors;
};

const renderPart = (name: string, part: QuestionPart, errors: ReturnType<typeof getErrors>) => {
  const rules: Rule[] = [];
  const className = errors == null ? undefined : `item--${errors.length ? 'error' : 'success'}`;
  if (part.type === 'staticText') {
    return (
      <Typography.Text key={name} strong={part.bold}>
        {part.value}
      </Typography.Text>
    );
  }
  if (part.type === 'newLine') {
    return <br />;
  }
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
    return (
      <Fragment key={name}>
        <Form.Item name={name} rules={rules} validateTrigger="onChange" noStyle>
          <Select className={className} style={part.style}>
            {part.options.map(opt => (
              <Select.Option key={opt} value={opt}>
                {opt}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        {errors && (
          <Tooltip title={errors.join(' ')}>
            <WarningOutlined />
          </Tooltip>
        )}
      </Fragment>
    );
  }
  if (part.type === 'openText') {
    rules.push({
      type: 'string',
      validator: (_: any, value: string, callback: (error?: string) => void) => {
        if (!value) {
          callback('Please type!');
        } else if (part.value !== value) {
          callback(part.value);
        } else {
          callback();
        }
      },
    });
    return (
      <Fragment key={name}>
        <Form.Item name={name} rules={rules} validateTrigger="onChange" noStyle>
          <Input type="text" className={className} style={part.style} maxLength={part.maxLength} />
        </Form.Item>
        {errors && (
          <Tooltip title={errors.join(' ')}>
            <WarningOutlined />
          </Tooltip>
        )}
      </Fragment>
    );
  }
  return null;
};

type TestContentProps = { test: Test };

const TestContent: React.FC<TestContentProps> = ({ test }) => {
  const [errorFields, setErrorFields] = useState<ValidateErrorEntity['errorFields']>([]);
  const onFinishFailed = useCallback((errorInfo: ValidateErrorEntity) => {
    setErrorFields(errorInfo.errorFields);
  }, []);

  return (
    <Form name="basic" className="tests" onFinishFailed={onFinishFailed}>
      <div className="tests-header">
        <Typography.Title level={3}>{test.title}</Typography.Title>
      </div>
      <ol className="tests-content">
        {test.questions.map((parts: QuestionPart[], n: number) => (
          <li key={`${test.id}_${n}`}>
            {parts.map((part: QuestionPart, m: number) => {
              const name = `${test.id}_${n}_${m}`;
              return renderPart(name, part, getErrors(errorFields, name));
            })}
          </li>
        ))}
      </ol>
      <div className="tests-footer">
        <Button type="primary" htmlType="submit">
          Validate
        </Button>
      </div>
    </Form>
  );
};

export default TestContent;
