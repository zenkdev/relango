import { Button, Card, List, PageHeader, Spin } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReloadOutlined } from '@ant-design/icons';

import { RootState } from '../../app/rootReducer';
import { alertService } from '../../services';
import { fetchCourses } from './homeSlice';

const { Meta } = Card;

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
            <Link to={`/course/${item.id}`}>
              <Card title={item.title}>
                <Meta description={item.subTitle} />
              </Card>
            </Link>
          </List.Item>
        )}
      />
      <div>
        <button type="button" onClick={() => alertService.showMessage('test message')}>
          show test message
        </button>
        <button type="button" onClick={() => alertService.showStickyMessage('test sticky message')}>
          show test sticky message
        </button>
        <button type="button" onClick={() => alertService.showDialog('test dialog')}>
          show test dialog
        </button>
      </div>
      {isLoading && <Spin tip="Loading..." />}
    </div>
  );
};

export default HomePage;
