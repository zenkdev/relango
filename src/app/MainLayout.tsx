/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
import { Layout, Menu, version } from 'antd';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { UploadOutlined, HomeOutlined, VideoCameraOutlined } from '@ant-design/icons';

import HomePage from '../features/home/HomePage';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout: React.FC = () => (
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu mode="inline" defaultSelectedKeys={['3']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Courses</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/not-found">nav 3</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route render={() => <div>Miss</div>} />
            </Switch>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design version: {version}</Footer>
    </Layout>
  </Layout>
);

export default MainLayout;
