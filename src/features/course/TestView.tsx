/* eslint-disable react/jsx-one-expression-per-line */
import { Button, Typography } from 'antd';
import { Form, Formik, FormikHelpers } from 'formik';
import React, { useCallback, useMemo } from 'react';

import useLocalStorage from '../../hooks/useLocalStorage';
import { Option, Test } from '../../models';
import CommonOptions from './CommonOptions';
import FormikProps from './FormikProps';
import { Layout } from './layouts';
import styles from './TestView.module.scss';
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

interface TestViewProps {
  moduleId: string;
  test: Test;
}

function TestView({ moduleId, test }: TestViewProps) {
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
        <Form className={`ant-form ant-form-horizontal ${styles.form}`}>
          <Typography.Title level={3} className={styles.header}>
            {test.name}
          </Typography.Title>
          <CommonOptions hide={test.hideCommonOptions} />
          <div className={styles.content}>
            {test.title && (
              <Typography.Title level={4} className={styles.title}>
                {test.title}
              </Typography.Title>
            )}
            <Layout test={test} />
            {test.footnote && (
              <div className={styles.footnote}>
                <Typography.Text>{test.footnote}</Typography.Text>
              </div>
            )}
          </div>
          <div className={styles.footer}>
            <Button type="primary" htmlType="submit" disabled={context.disabled}>
              Validate
            </Button>
          </div>
          <FormikProps />
        </Form>
      </Formik>
    </TestContext.Provider>
  );
}

export default TestView;
