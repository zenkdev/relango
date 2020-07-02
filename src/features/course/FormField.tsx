import { Form, Input, Radio, Select, Typography } from 'antd';
import { Rule } from 'antd/lib/form';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import React, { useContext, useMemo } from 'react';

import { Option, TestField } from '../../models';
import ErrorIcon from './ErrorIcon';
import { TestContext } from './TestContent';
import prepareOptions from './utils/prepareOptions';

type ErrorFields = ValidateErrorEntity['errorFields'];

const getErrors = (errorFields: ErrorFields, name: string) => errorFields.find(x => x.name[0] === name)?.errors;
const getRules = (field: TestField): Rule[] => {
  if (field.type === 'singleChoice' || field.type === 'openText' || field.type === 'radio') {
    return [
      {
        type: 'string',
        validator: (_: any, value: string) =>
          new Promise((resolve, reject) => {
            if (!value) {
              // eslint-disable-next-line prefer-promise-reject-errors
              reject(field.type === 'openText' ? 'Please type!' : 'Please select!');
            } else if (Array.isArray(field.value) && !field.value.includes(value)) {
              reject(field.value.join('/'));
            } else if (!Array.isArray(field.value) && field.value !== value) {
              reject(field.value);
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

type FormFieldProps = {
  name: string;
  field: TestField;
};

const FormField: React.FC<FormFieldProps> = ({ name, field }) => {
  const { form, commonOptionNames, commonOptions, errorFields, disabled } = useContext(TestContext);
  const errors = useMemo(() => getErrors(errorFields, name), [errorFields, name]);
  const rules = useMemo(() => getRules(field), [field]);
  const className = errors == null ? undefined : `item--${errors.length ? 'error' : 'success'}`;
  const selected = Object.values(form.getFieldsValue(commonOptionNames));

  switch (field.type) {
    case 'staticText':
      return (
        <Typography.Text strong={field.bold} style={field.style}>
          {field.value}
        </Typography.Text>
      );
    case 'newLine':
      return <br />;
    case 'singleChoice': {
      const options = field.useCommonOptions ? commonOptions : prepareOptions(field.options);
      return (
        <>
          <Form.Item name={name} rules={rules} validateTrigger="onChange" noStyle>
            <Select className={className} style={field.style} disabled={disabled} allowClear={field.useCommonOptions}>
              {options && options.map(option => renderOption(option, selected))}
            </Select>
          </Form.Item>
          <ErrorIcon errors={errors} />
        </>
      );
    }
    case 'openText':
      return (
        <>
          {field.label && <strong>{field.label}</strong>}
          <Form.Item name={name} label={field.label} rules={rules} validateTrigger="onChange" noStyle>
            <Input type="text" className={className} style={field.style} readOnly={disabled} />
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
              {field.options.map(opt => (
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
    case 'match':
      return (
        <div className="tests-matches">
          <strong>{field.value}</strong>
          <span className={selected.includes(field.value) ? 'tests-matches--selected' : undefined}>{field.text}</span>
        </div>
      );
    default:
      return null;
  }
};

export default FormField;
