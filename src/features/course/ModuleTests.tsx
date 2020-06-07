import './ModuleTests.scss';

import { Button, Steps } from 'antd';
import React, { useCallback, useState } from 'react';

import { Test } from '../../models';
import TestContent from './TestContent';

type ModuleTestsProps = { tests: Test[] };

const ModuleTests: React.FC<ModuleTestsProps> = ({ tests }) => {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent(value => value + 1), []);
  const prev = useCallback(() => setCurrent(value => value - 1), []);

  return (
    <div>
      <Steps current={current}>
        {tests.map(test => (
          <Steps.Step key={test.id} title={test.id} description={test.title} />
        ))}
      </Steps>
      <div className="steps-content">
        <TestContent test={tests[current]} />
      </div>
      <div className="steps-action">
        {current < tests.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === tests.length - 1 && (
          <Button type="primary" onClick={() => alert('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={prev}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default ModuleTests;
