import React from 'react';
import { Layout, Breadcrumb, Menu } from 'antd';
// import Nav from './Nav';
import styles from './frame.css';

const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;

const Frame = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className={styles.logo}>
          Carrie
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px', border: 'none' }}
        >
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">试卷列表</Menu.Item>
          <Menu.Item key="3">笔记本</Menu.Item>
          <Menu.Item key="4">做题统计</Menu.Item>
          <Menu.Item key="5">内容管理</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 5px' }}>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: '0 5px', minHeight: '70vh' }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant princewck
    </Footer>
    </Layout>
  );
};

export default Frame;
