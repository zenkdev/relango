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
import { localStoreManager } from '../../services';

const { Content, Sider } = Layout;

type CoursePageParams = {
  id: string;
  moduleId?: string;
};

type CoursePageOwnProps = RouteComponentProps<CoursePageParams>;

const mapStateToProps = (state: RootState, { history, match, location }: CoursePageOwnProps) => {
  const { isLoading, data } = state.course;
  const { id: courseId, moduleId } = match.params;

  const modules = selectors.selectModules(state);

  let nextLocation: string | undefined;
  let ensureModuleId: string | null | undefined = moduleId;
  if (!ensureModuleId) {
    // try to get last viewed module id
    ensureModuleId = localStoreManager.getDataObject<string>(`relango::course:${courseId}::module`);
    if (!ensureModuleId) {
      // get first module id
      ensureModuleId = modules[0]?.id;
    }
    if (ensureModuleId) {
      // replace current location
      nextLocation = `/course/${courseId}/module/${ensureModuleId}`;
    }
  }

  // store last viewd module id
  localStorage.setItem(`relango::course:${courseId}::module`, ensureModuleId);

  const { pathname } = location;
  const menuItems = modules.map(({ id, name }) => ({ name, to: `/course/${courseId}/module/${id}` }));
  return {
    isLoading,
    title: data && data.title,
    subTitle: data && data.subTitle,
    menu: {
      items: menuItems,
      selected: pathname,
    },
    currentModule: selectors.selectCurrentModule(state, ensureModuleId),
    nextLocation,
    history,
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

const CoursePage: React.FC<CoursePageProps> = ({ isLoading, title, subTitle, menu, currentModule, nextLocation, history, fetchData }) => {
  useEffect(() => {
    if (nextLocation) {
      history.replace(nextLocation);
    }
  }, [nextLocation, history]);
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
