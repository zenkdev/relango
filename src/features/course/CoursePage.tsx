import { Button, Layout, Menu, MenuProps, PageHeader, Spin } from 'antd';
import React, { useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { ReloadOutlined } from '@ant-design/icons';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { localStoreManager } from '../../services';
import { getModuleUrl } from '../../utils';
import * as actions from './courseSlice';
import ModuleView from './ModuleView';
import { selectModules } from './selectors';

const { Content, Sider } = Layout;

type CoursePageParams = {
  id: string;
  moduleId: string;
};

const useCoursePage = () => {
  const { id: courseId, moduleId } = useParams<CoursePageParams>();
  const { isLoading, data } = useAppSelector(state => state.course);
  const modules = useAppSelector(selectModules);

  const menu = React.useMemo(() => {
    if (!courseId) {
      return {
        items: [],
        selected: '',
      };
    }

    const items: MenuProps['items'] = modules.map(({ id, name }) => {
      const to = getModuleUrl(courseId, id);
      return {
        label: <Link to={to}>{name}</Link>,
        key: to,
      };
    });
    const selected = getModuleUrl(courseId, moduleId);

    return {
      items,
      selected,
    };
  }, [courseId, moduleId, modules]);

  const dispatch = useAppDispatch();
  const fetchData = React.useCallback(() => {
    if (courseId) {
      dispatch(actions.fetchCourse(courseId));
    }
  }, [dispatch, courseId]);

  const navigate = useNavigate();
  const goBack = React.useCallback(() => {
    navigate('/');
  }, [navigate]);

  const ref = useRef(false);
  React.useEffect(() => {
    if (ref.current) {
      return;
    }

    ref.current = true;

    if (courseId && !moduleId) {
      // get last viewed module id or just the first one
      const nextModuleId = localStoreManager.getModule(courseId) || modules[0]?.id;
      if (nextModuleId) {
        navigate(getModuleUrl(courseId, nextModuleId), { replace: true });
      }
    }
  }, [courseId, moduleId, modules, navigate]);

  // store last viewed module id
  if (courseId && moduleId) {
    localStoreManager.setModule(courseId, moduleId);
  }

  React.useEffect(fetchData, [fetchData]);

  return {
    isLoading,
    title: data?.title,
    subTitle: data?.subTitle,
    menu,
    moduleId,
    fetchData,
    goBack,
  };
};

function CoursePage() {
  const { isLoading, title, subTitle, menu, moduleId, fetchData, goBack } = useCoursePage();

  return (
    <>
      <Sider className="site-layout-background" width={200}>
        <Menu mode="inline" selectedKeys={[menu.selected]} style={{ height: '100%' }} items={menu.items} />
        {isLoading && <Spin tip="Loading..." />}
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <PageHeader
          onBack={goBack}
          title={title}
          subTitle={subTitle}
          extra={[<Button key="refresh" type="primary" shape="circle" icon={<ReloadOutlined />} onClick={fetchData} />]}
        />
        <ModuleView moduleId={moduleId} />
        {isLoading && <Spin tip="Loading..." />}
      </Content>
    </>
  );
}

export default CoursePage;
