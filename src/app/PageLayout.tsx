/* eslint-disable react/jsx-one-expression-per-line */
import { Breadcrumb, Layout, Menu, version } from 'antd';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import CoursePage from '../features/course/CoursePage';
import HomePage from '../features/home/HomePage';

const { Header, Content, Footer } = Layout;

const PageLayout: React.FC = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
          <Link to="/">Courses</Link>
        </Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">
          <Link to="/not-found">Not Found</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/course/:id" component={CoursePage} />
          <Route exact path="/course/:id/lesson/:lessonId" component={CoursePage} />
          <Route render={() => <div>Miss</div>} />
        </Switch>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design version: {version}</Footer>
  </Layout>
);

export default PageLayout;
