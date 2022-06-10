import { useFormikContext } from 'formik';
import React from 'react';

import { ensureArray } from '../../utils';
import styles from './CommonOptions.module.scss';
import { TestContext } from './TestView';
import getSelectedFromValues from './utils/getSelectFromValues';

function CommonOptions({ hide }: { hide?: boolean }) {
  const { values } = useFormikContext<any>();
  const { commonOptionNames, commonOptions } = React.useContext(TestContext);

  if (!commonOptions || hide) {
    return null;
  }

  const selected = getSelectedFromValues(values, commonOptionNames);

  return (
    <div className={styles.block}>
      {commonOptions.map(({ text, value }) => (
        <span key={text} className={selected.some(s => ensureArray(value).includes(s)) ? styles.selected : undefined}>
          {text}
        </span>
      ))}
    </div>
  );
}

export default CommonOptions;
