import { useFormikContext } from 'formik';
import React, { useContext } from 'react';

import { TestContext } from './TestContent';
import getSelectedFromValues from './utils/getSelectFromValues';

function CommonOptions({ hide }: { hide?: boolean }) {
  const { values } = useFormikContext<any>();
  const { commonOptionNames, commonOptions } = useContext(TestContext);

  if (!commonOptions || hide) {
    return null;
  }

  const selected = getSelectedFromValues(values, commonOptionNames);

  return (
    <div className="tests-commonOptions">
      {commonOptions.map(({ text, value }) => (
        <span key={value} className={selected.includes(value) ? 'tests-commonOptions--selected' : undefined}>
          {text}
        </span>
      ))}
    </div>
  );
}

export default CommonOptions;
