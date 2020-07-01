import React, { useContext } from 'react';

import { TestContext } from './TestContent';

const CommonOptions: React.FC = () => {
  const { form, commonOptionNames, commonOptions } = useContext(TestContext);

  if (!commonOptions) {
    return null;
  }

  const selected = Object.values(form.getFieldsValue(commonOptionNames));
  return (
    <div className="tests-tags">
      {commonOptions.map(opt => (
        <span
          key={typeof opt === 'string' ? opt : opt.value}
          className={selected.includes(typeof opt === 'string' ? opt : opt.value) ? 'tests-tags--selected' : undefined}
        >
          {typeof opt === 'string' ? opt : opt.text}
        </span>
      ))}
    </div>
  );
};

export default CommonOptions;
