import { Input, Radio, Select, Typography } from 'antd';
// import { Rule } from 'antd/lib/form';
import { Field, FieldProps, useFormikContext } from 'formik';
// import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import React, { useContext } from 'react';

import { Option, TestField } from '../../models';
import ErrorIcon from './ErrorIcon';
import { TestContext } from './TestContent';
import getSelectedFromValues from './utils/getSelectFromValues';
import prepareOptions from './utils/prepareOptions';

type OptionsType = Array<any>;

function getOptions(options: Option[] | undefined, selected: string[]): OptionsType | undefined {
  if (options == null || options.length === 0) {
    return undefined;
  }
  return options.map(option => ({ text: option.text, value: option.value, disabled: selected.includes(option.value) }));
}

interface FormFieldProps {
  name: string;
  field: TestField;
}

function FormField({ name, field }: FormFieldProps) {
  const { values, errors, setFieldValue } = useFormikContext<any>();
  const { commonOptionNames, commonOptions, disabled } = useContext(TestContext);
  // const rules = useMemo(() => getRules(field), [field]);
  const selected = getSelectedFromValues(values, commonOptionNames);
  const err = errors?.[name] ? [errors?.[name] as string] : undefined;
  const className = err == null ? undefined : `item--${errors.length ? 'error' : 'success'}`;

  switch (field.type) {
    case 'text':
      const style = field.style ?? {};
      if (field.italic) {
        style.fontStyle = 'italic';
      }
      return (
        <Typography.Text strong={field.bold} style={style}>
          {field.value}
        </Typography.Text>
      );
    case 'newLine':
      return <br />;
    case 'singleChoice': {
      return (
        <Field name={name}>
          {({ field: { value } }: FieldProps) => {
            const options = field.useCommonOptions ? commonOptions : prepareOptions(field.options);
            return (
              <>
                <Select
                  value={value}
                  className={className}
                  style={field.style}
                  disabled={disabled}
                  allowClear={field.useCommonOptions}
                  options={getOptions(options, selected)}
                  onChange={val => setFieldValue(name, val, false)}
                />
                <ErrorIcon errors={err} />
              </>
            );
          }}
        </Field>
      );
    }
    case 'textbox':
      return (
        <Field name={name}>
          {({ field: { value, onChange } }: FieldProps) => {
            const style = field.style ?? { width: 'unset' };
            return (
              <>
                {field.label && (
                  <label htmlFor={name}>
                    <strong>{field.label}</strong>
                  </label>
                )}
                <Input
                  type="text"
                  id={name}
                  name={name}
                  value={value}
                  className={className}
                  style={style}
                  disabled={disabled}
                  onChange={onChange}
                  htmlSize={field.size}
                />
                <ErrorIcon errors={err} />
              </>
            );
          }}
        </Field>
      );
    case 'radio': {
      const radioStyle =
        field.layout === 'horizontal'
          ? undefined
          : {
              display: 'block',
              height: '30px',
              lineHeight: '30px',
            };
      return (
        <Field name={name}>
          {({ field: { value, onChange } }: FieldProps) => {
            return (
              <>
                <Radio.Group
                  id={name}
                  name={name}
                  value={value}
                  className={className}
                  disabled={disabled}
                  options={field.options.map(opt => ({ label: opt, value: opt, style: radioStyle }))}
                  onChange={onChange}
                />
                <ErrorIcon errors={err} />
              </>
            );
          }}
        </Field>
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
}

export default FormField;
