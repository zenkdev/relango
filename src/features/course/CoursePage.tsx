import { Button, Layout, Menu, PageHeader, Spin } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { LaptopOutlined, NotificationOutlined, ReloadOutlined } from '@ant-design/icons';

import { RootState } from '../../app/rootReducer';
import { AppDispatch } from '../../app/store';
import * as actions from './courseSlice';
import * as selectors from './selectors';

const { Content, Sider } = Layout;

type CoursePageParams = {
  id: string;
  lessonId?: string;
};

type CoursePageOwnProps = RouteComponentProps<CoursePageParams>;

const mapStateToProps = (state: RootState) => {
  const { isLoading, data } = state.course;
  return {
    isLoading,
    title: data && data.title,
    subTitle: data && data.subTitle,
    lessons: selectors.selectLessons(state),
  };
};

const mapDispatchToProps = (dispatch: AppDispatch, { match }: CoursePageOwnProps) => {
  const { id } = match.params;
  return {
    fetchData: () => {
      dispatch(actions.fetchCourse(id));
    },
  };
};

type CoursePageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const CoursePage: React.FC<CoursePageProps> = ({ isLoading, title, subTitle, lessons, fetchData }) => {
  useEffect(() => fetchData(), [fetchData]);
  return (
    <>
      <Sider className="site-layout-background" width={200}>
        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }}>
          {lessons.map(({ id, name }) => {
            return <Menu.Item key={id}>{name}</Menu.Item>;
          })}
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
        {isLoading && <Spin tip="Loading..." />}
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <PageHeader
          onBack={() => null}
          title={title}
          subTitle={subTitle}
          extra={[<Button key="refresh" type="primary" shape="circle" icon={<ReloadOutlined />} onClick={fetchData} />]}
        />
        {isLoading && <Spin tip="Loading..." />}
      </Content>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
