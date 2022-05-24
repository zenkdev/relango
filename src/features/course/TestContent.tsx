/* eslint-disable react/jsx-one-expression-per-line */
import { Button, Typography } from 'antd';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { useCallback, useMemo } from 'react';

import useLocalStorage from '../../hooks/useLocalStorage';
import { Option, Test } from '../../models';
import Article from './Article';
import CommonOptions from './CommonOptions';
import FormikProps from './FormikProps';
import Grid from './Grid';
import OrderedList from './OrderedList';
import getCommonOptionNames from './utils/getCommonOptionNames';
import getFieldName from './utils/getFieldName';
import mergeModuleContent from './utils/mergeModuleContent';
import prepareOptions from './utils/prepareOptions';

type Values = Record<string, string | any>;

export const TestContext = React.createContext(
  {} as {
    commonOptionNames: string[];
    commonOptions?: Option[];
    disabled?: boolean;
  },
);

interface TestContentProps {
  moduleId: string;
  test: Test;
}

function TestContent({ moduleId, test }: TestContentProps) {
  const [testContent, setTestContent] = useLocalStorage<Values>('testContent', {});
  const handleValidate = useCallback(
    (values: Values) => {
      const errors: Values = {};

      test.items.forEach(item => {
        item.fields.forEach((field, m) => {
          if (field.type === 'textbox' || field.type === 'radio' || field.type === 'select') {
            const name = getFieldName(test.id, item.id, m);
            const value = values[name];
            if (!value) {
              errors[name] = field.type === 'textbox' ? 'Please type!' : 'Please select!';
            } else if (Array.isArray(field.value) && !field.value.includes(value)) {
              errors[name] = field.value.join('/');
            } else if (!Array.isArray(field.value) && field.value !== value) {
              errors[name] = field.value;
            }
          }
        });
      });

      return errors;
    },
    [test],
  );
  const handleOnSubmit = useCallback(
    (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
      const moduleContent = testContent[moduleId];
      const nextModuleContent = mergeModuleContent(test, values, moduleContent);
      setTestContent({ ...testContent, [moduleId]: nextModuleContent });
      setSubmitting(false);
    },
    [testContent, moduleId, test, setTestContent],
  );
  const commonOptionNames = useMemo(() => getCommonOptionNames(test), [test]);
  const commonOptions = useMemo(() => prepareOptions(test.commonOptions), [test.commonOptions]);
  const initialValues = useMemo(() => testContent[moduleId]?.[test.id], [testContent, moduleId, test.id]);
  const context = useMemo(
    () => ({ commonOptionNames, commonOptions, disabled: !!initialValues }),
    [commonOptionNames, commonOptions, initialValues],
  );

  return (
    <TestContext.Provider value={context}>
      <Formik initialValues={initialValues ?? {}} enableReinitialize validate={handleValidate} onSubmit={handleOnSubmit}>
        <Form className="ant-form ant-form-horizontal tests">
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
          {test.footnote && (
            <Typography.Title level={5} className="tests-footnote">
              {test.footnote}
            </Typography.Title>
          )}
          <div className="tests-footer">
            <TestContext.Consumer>
              {({ disabled }) => (
                <Button type="primary" htmlType="submit" disabled={disabled}>
                  Validate
                </Button>
              )}
            </TestContext.Consumer>
          </div>
          <FormikProps />
        </Form>
      </Formik>
    </TestContext.Provider>
  );
}

export default TestContent;
