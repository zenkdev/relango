import { Select } from 'antd';
import { Field, FieldProps } from 'formik';
import React from 'react';

import { SelectField as SelectFieldModel } from '../../models';
import ErrorIcon from './ErrorIcon';
import { TestContext } from './TestContent';
import getSelectedFromValues from './utils/getSelectFromValues';
import prepareOptions from './utils/prepareOptions';

interface SelectFieldProps {
  name: string;
  field: SelectFieldModel;
  onChange: (value: any) => void;
}

function SelectFormField({ name, field, onChange }: SelectFieldProps) {
  const { commonOptions, commonOptionNames /*, disabled*/ } = React.useContext(TestContext);
  const useCommonOptions = !field.options?.length;
  const options = (useCommonOptions ? commonOptions : prepareOptions(field.options)) || [];

  const style = field.style ?? {};
  style.minWidth = `${Math.max(...options.map(o => o.text.length), 10) * 10}px`;

  return (
    <Field name={name}>
      {({ field: { value }, form: { values, errors } }: FieldProps) => {
        const selected = getSelectedFromValues(values, commonOptionNames);
        const selectOptions = options.map(option => ({
          text: option.text,
          value: option.value,
          disabled: selected.includes(option.value),
        }));
        const err = errors?.[name] ? [errors?.[name] as string] : undefined;
        const className = err == null ? undefined : `item--${errors.length ? 'error' : 'success'}`;
        return (
          <>
            <Select
              value={value}
              className={className}
              style={style}
              // disabled={disabled}
              allowClear={useCommonOptions}
              options={selectOptions}
              onChange={onChange}
            />
            <ErrorIcon errors={err} />
          </>
        );
      }}
    </Field>
  );
}

export default SelectFormField;
