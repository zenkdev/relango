import { Radio } from 'antd';
import { Field, FieldProps } from 'formik';

import { RadioField } from '../../../models';
import ErrorIcon from './ErrorIcon';

interface RadioFormFieldProps {
  name: string;
  field: RadioField;
}

const optionStyle = {
  display: 'block',
  height: '36px',
  lineHeight: '36px',
};

function RadioFormField({ name, field }: RadioFormFieldProps) {
  // const { disabled } = React.useContext(TestContext);

  return (
    <Field name={name}>
      {({ field: { value, onChange }, form: { values, errors } }: FieldProps) => {
        const err = errors?.[name] ? [errors?.[name] as string] : undefined;
        const className = err == null ? undefined : `item--${errors.length ? 'error' : 'success'}`;
        return (
          <>
            <Radio.Group
              id={name}
              name={name}
              value={value}
              className={className}
              // disabled={disabled}
              options={field.options.map(opt => ({ label: opt, value: opt, style: optionStyle }))}
              onChange={onChange}
            />
            <ErrorIcon errors={err} />
          </>
        );
      }}
    </Field>
  );
}

export default RadioFormField;
