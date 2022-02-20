import { Button, Layout, Menu, PageHeader, Spin } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams, useLocation } from 'react-router-dom';

import { ReloadOutlined } from '@ant-design/icons';

import { RootState } from '../../app/rootReducer';
import * as actions from './courseSlice';
import ModuleContent from './ModuleContent';
import * as selectors from './selectors';
import { localStoreManager } from '../../services';

const { Content, Sider } = Layout;

type CoursePageParams = {
  id: string;
  moduleId: string;
};

const useCoursePage = () => {
  const { id: courseId, moduleId } = useParams<CoursePageParams>();
  const { isLoading, data } = useSelector((state: RootState) => state.course);
  const modules = useSelector(selectors.selectModules);

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

  const { pathname } = useLocation();
  const { push: navigate } = useHistory();
  const menuItems = modules.map(({ id, name }) => ({ name, to: `/course/${courseId}/module/${id}` }));

  const currentModule = useSelector((state: RootState) => selectors.selectCurrentModule(state, ensureModuleId as string));

  const dispatch = useDispatch();

  return {
    isLoading,
    title: data && data.title,
    subTitle: data && data.subTitle,
    menu: {
      items: menuItems,
      selected: pathname,
    },
    currentModule,
    nextLocation,
    navigate,
    fetchData: () => {
      dispatch(actions.fetchCourse(courseId as string) as any);
    },
  };
};

function CoursePage() {
  const { isLoading, title, subTitle, menu, currentModule, nextLocation, navigate, fetchData } = useCoursePage();

  useEffect(() => {
    if (nextLocation) {
      navigate(nextLocation);
    }
  }, [nextLocation, navigate]);
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
}

export default CoursePage;
