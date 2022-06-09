import { Input } from 'antd';
import { Field, FieldProps } from 'formik';

import { TextboxField } from '../../../models';
import ErrorIcon from './ErrorIcon';

interface TextboxFormFieldProps {
  name: string;
  field: TextboxField;
  className?: string;
  errors?: string[];
}

function TextboxFormField({ name, field, className, errors }: TextboxFormFieldProps) {
  const style = field.style ?? { width: 'unset' };

  return (
    <Field name={name}>
      {({ field: { value, onChange } }: FieldProps) => (
        <>
          <Input
            type="text"
            id={name}
            name={name}
            value={value}
            className={className}
            style={style}
            // disabled={disabled}
            onChange={onChange}
            htmlSize={field.size}
          />
          <ErrorIcon errors={errors} />
        </>
      )}
    </Field>
  );
}

export default TextboxFormField;
