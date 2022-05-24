import { Input, Radio, Typography } from 'antd';
// import { Rule } from 'antd/lib/form';
import { Field, FieldProps, useFormikContext } from 'formik';
// import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import React from 'react';

import { TestField } from '../../models';
import ErrorIcon from './ErrorIcon';
import SelectFormField from './SelectFormField';
import { TestContext } from './TestContent';
import getSelectedFromValues from './utils/getSelectFromValues';

interface FormFieldProps {
  name: string;
  field: TestField;
}

function FormField({ name, field }: FormFieldProps) {
  const { values, errors, setFieldValue } = useFormikContext<any>();
  const { commonOptionNames, disabled } = React.useContext(TestContext);
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
    case 'select':
      return <SelectFormField name={name} field={field} onChange={val => setFieldValue(name, val, false)} />;
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
