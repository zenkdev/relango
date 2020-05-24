import { Button, Card, List, PageHeader, Spin } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReloadOutlined } from '@ant-design/icons';

import { RootState } from '../../app/rootReducer';
import { fetchCourses } from './homeSlice';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state: RootState) => state.home);
  const fetchData = useCallback(() => {
    dispatch(fetchCourses());
  }, [dispatch]);
  useEffect(() => fetchData(), [fetchData]);

  return (
    <div>
      <PageHeader
        onBack={() => null}
        title="Courses"
        subTitle="This is a subtitle"
        extra={[<Button key="refresh" type="primary" shape="circle" icon={<ReloadOutlined />} onClick={fetchData} />]}
      />
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.name}>Card content</Card>
          </List.Item>
        )}
      />
      {isLoading && <Spin tip="Loading..." />}
    </div>
  );
};

export default HomePage;
