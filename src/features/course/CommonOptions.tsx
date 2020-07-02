import React, { useContext } from 'react';

import { TestContext } from './TestContent';

const CommonOptions: React.FC<{ hide?: boolean }> = ({ hide }) => {
  const { form, commonOptionNames, commonOptions } = useContext(TestContext);

  if (!commonOptions || hide) {
    return null;
  }

  const selected = Object.values(form.getFieldsValue(commonOptionNames));
  return (
    <div className="tests-commonOptions">
      {commonOptions.map(({ text, value }) => (
        <span key={value} className={selected.includes(value) ? 'tests-tags--selected' : undefined}>
          {text}
        </span>
      ))}
    </div>
  );
};

export default CommonOptions;
