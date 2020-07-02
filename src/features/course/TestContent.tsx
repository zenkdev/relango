import { Button, Form, Typography } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { Store, ValidateErrorEntity } from 'rc-field-form/lib/interface';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import useLocalStorage from '../../hooks/useLocalStorage';
import { Option, Test } from '../../models';
import Article from './Article';
import CommonOptions from './CommonOptions';
import Grid from './Grid';
import OrderedList from './OrderedList';
import getCommonOptionNames from './utils/getCommonOptionNames';
import prepareOptions from './utils/prepareOptions';

type ErrorFields = ValidateErrorEntity['errorFields'];

const mergeErrors = (nameList: string[], errorFields: ErrorFields, nextErrorFields: ErrorFields): ErrorFields => {
  return nameList.reduce((acc, name) => {
    const n = acc.findIndex(x => x.name[0] === name);
    if (n !== -1) {
      acc.splice(n, 1);
    }
    const errorField = nextErrorFields.find(x => x.name[0] === name);
    if (errorField) {
      acc.push(errorField);
    }
    return [...acc];
  }, errorFields);
};

export const TestContext = React.createContext(
  {} as {
    form: FormInstance;
    commonOptionNames: string[];
    commonOptions?: Option[];
    errorFields: ErrorFields;
    disabled?: boolean;
  },
);

type TestContentProps = { test: Test };

const TestContent: React.FC<TestContentProps> = ({ test }) => {
  const [form] = Form.useForm();
  const [testContent, setTestContent] = useLocalStorage<Record<string, Store>>('testContent', {});
  const [errorFields, setErrorFields] = useState<ErrorFields>([]);
  const handleFinish = useCallback((values: Store) => setTestContent({ ...testContent, [test.id]: values }), [
    testContent,
    test.id,
    setTestContent,
  ]);
  const handleFinishFailed = useCallback(({ errorFields: nextErrorFields }: ValidateErrorEntity) => setErrorFields(nextErrorFields), []);
  const handleValuesChange = useCallback(
    (changedValues: Store) => {
      const nameList = Object.keys(changedValues);
      form
        .validateFields(nameList)
        .then(() => setErrorFields([]))
        .catch(({ errorFields: nextErrorFields }) => setErrorFields(mergeErrors(nameList, errorFields, nextErrorFields)));
    },
    [form, errorFields],
  );
  const commonOptionNames = useMemo(() => getCommonOptionNames(test), [test]);
  const commonOptions = useMemo(() => prepareOptions(test.commonOptions), [test.commonOptions]);

  const storedValues = testContent[test.id];
  useEffect(() => {
    if (storedValues) {
      form.setFieldsValue(storedValues);
    } else {
      form.resetFields();
    }
  }, [form, storedValues]);

  return (
    <Form
      form={form}
      name="basic"
      className="tests"
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
      onValuesChange={handleValuesChange}
    >
      <TestContext.Provider value={{ form, commonOptionNames, commonOptions, errorFields, disabled: !!storedValues }}>
        <Typography.Title level={3} className="tests-header">
          {test.name}
        </Typography.Title>
        <CommonOptions hide={test.hideCommonOptions} />
        <div className="tests-content">
          {test.title && (
            <Typography.Title level={4} className="tests-title">
              {test.title}
            </Typography.Title>
          )}
          {test.layout === 'orderedList' && <OrderedList testId={test.id} items={test.items} columns={test.layoutColumns} />}
          {test.layout === 'article' && <Article testId={test.id} items={test.items} columns={test.layoutColumns} />}
          {test.layout === 'grid' && <Grid testId={test.id} items={test.items} columns={test.layoutColumns} />}
        </div>
        <div className="tests-footer">
          <Button type="primary" htmlType="submit" disabled={!!storedValues}>
            Validate
          </Button>
        </div>
      </TestContext.Provider>
    </Form>
  );
};

export default TestContent;
