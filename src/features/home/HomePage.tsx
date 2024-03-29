import { Button, Card, List, PageHeader, Spin } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { ReloadOutlined } from '@ant-design/icons';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { alertService } from '../../services';
import { getModuleUrl } from '../../utils';
import { fetchCourses } from './homeSlice';

function HomePage() {
  const dispatch = useAppDispatch();
  const { isLoading, data } = useAppSelector(state => state.home);
  const fetchData = React.useCallback(() => {
    dispatch(fetchCourses());
  }, [dispatch]);
  React.useEffect(() => fetchData(), [fetchData]);

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
            <Link to={getModuleUrl(item.id)}>
              <Card title={item.title} cover={item.image ? <img src={item.image} alt={item.title} /> : undefined}>
                <Card.Meta description={item.subTitle} />
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
}

export default HomePage;
