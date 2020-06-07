import { Button, Layout, Menu, PageHeader, Spin } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import { ReloadOutlined } from '@ant-design/icons';

import { RootState } from '../../app/rootReducer';
import { AppDispatch } from '../../app/store';
import * as actions from './courseSlice';
import ModuleContent from './ModuleContent';
import * as selectors from './selectors';

const { Content, Sider } = Layout;

type CoursePageParams = {
  id: string;
  moduleId?: string;
};

type CoursePageOwnProps = RouteComponentProps<CoursePageParams>;

const mapStateToProps = (state: RootState, { match, location }: CoursePageOwnProps) => {
  const { isLoading, data } = state.course;
  const { id: courseId, moduleId } = match.params;
  const { pathname } = location;
  const menuItems = selectors.selectModules(state).map(({ id, name }) => ({ name, to: `/course/${courseId}/module/${id}` }));
  return {
    isLoading,
    title: data && data.title,
    subTitle: data && data.subTitle,
    menu: {
      items: menuItems,
      selected: pathname,
    },
    currentModule: selectors.selectCurrentModule(state, moduleId),
  };
};

const mapDispatchToProps = (dispatch: AppDispatch, { match }: CoursePageOwnProps) => {
  const { id } = match.params;
  return {
    fetchData: () => {
      dispatch(actions.fetchCourse(id) as any);
    },
  };
};

type CoursePageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const CoursePage: React.FC<CoursePageProps> = ({ isLoading, title, subTitle, menu, currentModule, fetchData }) => {
  useEffect(() => fetchData(), [fetchData]);
  return (
    <>
      <Sider className="site-layout-background" width={200}>
        <Menu mode="inline" selectedKeys={[menu.selected]} style={{ height: '100%' }}>
          {menu.items.map(({ name, to }) => (
            <Menu.Item key={to}>
              <Link to={to}>{name}</Link>
            </Menu.Item>
          ))}
          {/* <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">
              <Link to="/option5">option5</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <a href="/option6">option6</a>
            </Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu> */}
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
        {currentModule && <ModuleContent module={currentModule} prev={currentModule.prev} next={currentModule.next} />}
        {isLoading && <Spin tip="Loading..." />}
      </Content>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
