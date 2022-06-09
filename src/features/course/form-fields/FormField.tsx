import { useFormikContext } from 'formik';
import React from 'react';

import { TestField } from '../../../models';
import { TestContext } from '../TestView';
import getSelectedFromValues from '../utils/getSelectFromValues';
import styles from './FormField.module.scss';
import RadioFormField from './RadioFormField';
import SelectFormField from './SelectFormField';
import TextboxFormField from './TextboxFormField';
import TextFormField from './TextFormField';

interface FormFieldProps {
  name: string;
  field: TestField;
}

function FormField({ name, field }: FormFieldProps) {
  const { values, setFieldValue, errors } = useFormikContext<any>();
  const { commonOptionNames } = React.useContext(TestContext);
  const selected = getSelectedFromValues(values, commonOptionNames);
  const fieldErrors = errors?.[name] ? [errors?.[name] as string] : undefined;
  const className = fieldErrors && (fieldErrors.length ? styles.error : styles.success);

  switch (field.type) {
    case 'text':
      return <TextFormField field={field} />;
    case 'newLine':
      return <br />;
    case 'select':
      return (
        <SelectFormField
          name={name}
          field={field}
          onChange={val => setFieldValue(name, val, false)}
          className={className}
          errors={fieldErrors}
        />
      );
    case 'textbox':
      return <TextboxFormField name={name} field={field} className={className} errors={fieldErrors} />;
    case 'radio':
      return <RadioFormField name={name} field={field} className={className} errors={fieldErrors} />;
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
