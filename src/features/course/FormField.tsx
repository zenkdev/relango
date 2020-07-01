import { Form, Input, Radio, Select, Typography } from 'antd';
import { Rule } from 'antd/lib/form';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import React, { useMemo, useContext } from 'react';

import { QuestionPart, Test, Option } from '../../models';
import ErrorIcon from './ErrorIcon';
import { TestContext } from './TestContent';
import prepareOptions from './utils/prepareOptions';

type ErrorFields = ValidateErrorEntity['errorFields'];

const getErrors = (errorFields: ErrorFields, name: string) => errorFields.find(x => x.name[0] === name)?.errors;
const getRules = (part: QuestionPart): Rule[] => {
  if (part.type === 'singleChoice' || part.type === 'openText' || part.type === 'radio') {
    return [
      {
        type: 'string',
        validator: (_: any, value: string) =>
          new Promise((resolve, reject) => {
            if (!value) {
              // eslint-disable-next-line prefer-promise-reject-errors
              reject(part.type === 'openText' ? 'Please type!' : 'Please select!');
            } else if (Array.isArray(part.value) && !part.value.includes(value)) {
              reject(part.value.join('/'));
            } else if (!Array.isArray(part.value) && part.value !== value) {
              reject(part.value);
            } else {
              resolve();
            }
          }),
      },
    ];
  }
  return [];
};

function renderOption({ text, value }: Option, selected: string[]) {
  return (
    <Select.Option key={value} value={value} disabled={selected.includes(value)}>
      {text}
    </Select.Option>
  );
}

function renderMatch(match: { value: string }, selected: string[]) {
  return (
    <Select.Option key={match.value} value={match.value} disabled={selected.includes(match.value)}>
      {match.value}
    </Select.Option>
  );
}

type FormFieldProps = {
  name: string;
  matches?: Test['matches'];
  part: QuestionPart;
};

const FormField: React.FC<FormFieldProps> = ({ name, matches, part }) => {
  const { form, commonOptionNames, commonOptions, errorFields, disabled } = useContext(TestContext);
  const errors = useMemo(() => getErrors(errorFields, name), [errorFields, name]);
  const rules = useMemo(() => getRules(part), [part]);
  const className = errors == null ? undefined : `item--${errors.length ? 'error' : 'success'}`;
  const selected = Object.values(form.getFieldsValue(commonOptionNames));

  switch (part.type) {
    case 'staticText':
      return <Typography.Text strong={part.bold}>{part.value}</Typography.Text>;
    case 'newLine':
      return <br />;
    case 'singleChoice': {
      const options = part.useCommonOptions ? commonOptions : prepareOptions(part.options);
      return (
        <>
          <Form.Item name={name} rules={rules} validateTrigger="onChange" noStyle>
            <Select className={className} style={part.style} disabled={disabled} allowClear={part.useCommonOptions}>
              {options && options.map(option => renderOption(option, selected))}
              {matches && matches.map(match => renderMatch(match, selected))}
            </Select>
          </Form.Item>
          <ErrorIcon errors={errors} />
        </>
      );
    }
    case 'openText':
      return (
        <>
          {part.label && <strong>{part.label}</strong>}
          <Form.Item name={name} label={part.label} rules={rules} validateTrigger="onChange" noStyle>
            <Input type="text" className={className} style={part.style} readOnly={disabled} />
          </Form.Item>
          <ErrorIcon errors={errors} />
        </>
      );
    case 'radio': {
      const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };
      return (
        <>
          <Form.Item name={name} rules={rules} validateTrigger="onChange" noStyle>
            <Radio.Group disabled={disabled}>
              {part.options.map(opt => (
                <Radio style={radioStyle} value={opt}>
                  {opt}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <ErrorIcon errors={errors} />
        </>
      );
    }
    default:
      return null;
  }
};

export default FormField;
