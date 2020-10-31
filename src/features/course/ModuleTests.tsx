import './ModuleTests.scss';

import { Button, Steps } from 'antd';
import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router';
import parse from 'url-parse';

import { Test } from '../../models';
import TestContent from './TestContent';

type ModuleTestsProps = { tests: Test[] };

const ModuleTests: React.FC<ModuleTestsProps> = ({ tests }) => {
  const history = useHistory();
  const current = useMemo(() => {
    const { search } = history.location;
    if (!search) {
      return 0;
    }
    const { query } = parse(search, true);
    const num = Number(query.test);
    return Number.isNaN(num) ? 0 : num;
  }, [history.location]);
  const handleChange = useCallback(
    (nextCurrent: number) => {
      const location = {
        ...history.location,
        search: `?test=${nextCurrent}`,
      };
      history.push(location);
    },
    [history],
  );
  const next = useCallback(() => {
    const nextCurrent = current + 1;
    const location = {
      ...history.location,
      search: `?test=${nextCurrent}`,
    };
    history.push(location);
  }, [history, current]);
  const prev = useCallback(() => {
    const prevCurrent = current - 1;
    const location = {
      ...history.location,
      search: `?test=${prevCurrent}`,
    };
    history.push(location);
  }, [history, current]);

  return (
    <div>
      <Steps current={current} onChange={handleChange}>
        {tests.map((test, n) => (
          <Steps.Step key={test.id} title={test.id} status={current === n ? 'process' : 'wait'} />
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
