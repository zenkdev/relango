import { Breadcrumb, Layout, Menu, MenuProps, version } from 'antd';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import CoursePage from '../features/course/CoursePage';
import HomePage from '../features/home/HomePage';

const { Header, Content, Footer } = Layout;

const items: MenuProps['items'] = [
  {
    label: <Link to="/">Courses</Link>,
    key: 'cources',
  },
  {
    label: <Link to="/not-found">Not Found</Link>,
    key: 'not-found',
  },
];

function PageLayout() {
  const [current, setCurrent] = React.useState('cources');

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" onClick={onClick} selectedKeys={[current]} items={items} />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/course/:id/module/:moduleId" element={<CoursePage />} />
            <Route path="*" element={<div>Miss</div>} />
          </Routes>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design version: {version}</Footer>
    </Layout>
  );
}

export default PageLayout;
