import { useFormikContext } from 'formik';
import React from 'react';

function FormikProps() {
  const context = useFormikContext();
  return (
    <div>
      <ul>
        {Object.entries(context)
          .filter(([, value]) => typeof value !== 'function')
          .map(([key, value]) => (
            <li key={key}>
              {key}
              {typeof value === 'object' ? (
                <ul>
                  {Object.entries(value as any).map(([skey, svalue]) => (
                    <li key={skey}>{`${skey}: ${svalue}`}</li>
                  ))}
                </ul>
              ) : (
                `: ${value}`
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default FormikProps;
