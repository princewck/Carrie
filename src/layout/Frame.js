import React from 'react';
import { Layout, Breadcrumb, Menu } from 'antd';
import { NavLink } from 'dva/router';
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
          <Menu.Item key="1"><NavLink to="/">首页</NavLink></Menu.Item>
          <Menu.Item key="2"><NavLink to="/products">试卷列表</NavLink></Menu.Item>
          <Menu.Item key="3"><NavLink to="/">笔记本</NavLink></Menu.Item>
          <Menu.Item key="4"><NavLink to="/">做题统计</NavLink></Menu.Item>
          <Menu.Item key="5"><NavLink to="/content">内容管理</NavLink></Menu.Item>
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
