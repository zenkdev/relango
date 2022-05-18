import { Button, Layout, Menu, MenuProps, PageHeader, Spin } from 'antd';
import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { ReloadOutlined } from '@ant-design/icons';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { localStoreManager } from '../../services';
import * as actions from './courseSlice';
import ModuleContent from './ModuleContent';
import * as selectors from './selectors';

const { Content, Sider } = Layout;

type CoursePageParams = {
  id: string;
  moduleId: string;
};

const getModuleUrl = (courseId: string, moduleId: string) => `/course/${courseId}/module/${moduleId}`;

const useCoursePage = () => {
  const navigate = useNavigate();
  const { id: courseId, moduleId } = useParams<CoursePageParams>();
  const { isLoading, data } = useAppSelector(state => state.course);
  const modules = useAppSelector(selectors.selectModules);

  // let nextLocation: string | undefined;
  let ensureModuleId: string | null | undefined = moduleId;
  if (!ensureModuleId && courseId) {
    // try to get last viewed module id
    ensureModuleId = localStoreManager.getModule(courseId);
    if (!ensureModuleId) {
      // get first module id
      ensureModuleId = modules[0]?.id;
    }
    if (ensureModuleId) {
      // replace current location
      navigate(getModuleUrl(courseId, ensureModuleId));
    }
  }

  // store last viewd module id
  if (courseId) {
    if (ensureModuleId) localStoreManager.setModule(courseId, ensureModuleId);
    else localStoreManager.deleteModule(courseId);
  }

  const { pathname } = useLocation();
  const menuItems: MenuProps['items'] = modules.map(({ id, name }) => {
    const to = courseId ? getModuleUrl(courseId, id) : '';
    return {
      label: <Link to={to}>{name}</Link>,
      key: to,
    };
  });

  const currentModule = useAppSelector(state => selectors.selectCurrentModule(state, ensureModuleId || ''));

  const dispatch = useAppDispatch();
  const fetchData = React.useCallback(() => {
    dispatch(actions.fetchCourse(courseId as string));
  }, [courseId, dispatch]);

  return {
    isLoading,
    title: data && data.title,
    subTitle: data && data.subTitle,
    menu: {
      items: menuItems,
      selected: pathname,
    },
    currentModule,
    fetchData,
  };
};

function CoursePage() {
  const { isLoading, title, subTitle, menu, currentModule, fetchData } = useCoursePage();
  React.useEffect(() => fetchData(), [fetchData]);

  return (
    <>
      <Sider className="site-layout-background" width={200}>
        <Menu mode="inline" selectedKeys={[menu.selected]} style={{ height: '100%' }} items={menu.items} />
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
