import { Radio } from 'antd';
import { Field, FieldProps } from 'formik';

import { RadioField } from '../../../models';
import ErrorIcon from './ErrorIcon';

interface RadioFormFieldProps {
  name: string;
  field: RadioField;
  className?: string;
  errors?: string[];
}

const optionStyle = {
  display: 'block',
  height: '36px',
  lineHeight: '36px',
};

function RadioFormField({ name, field, className, errors }: RadioFormFieldProps) {
  // const { disabled } = React.useContext(TestContext);

  return (
    <Field name={name}>
      {({ field: { value, onChange } }: FieldProps) => (
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
          <ErrorIcon errors={errors} />
        </>
      )}
    </Field>
  );
}

export default RadioFormField;
