import React from 'react';
import { Route, Switch, Link } from 'dva/router';
import { Col, Row, Menu } from 'antd';
import { connect } from 'dva';

const Content = () => {
  return (
    <Row>
      <Col span={5}>
        <Menu
          style={{ width: '100%', height: '100%' }}
          defaultSelectedKeys={['0']}
          mode="inline"
        >
          <Menu.Item key="0"><Link to="/content">内容管理</Link></Menu.Item>
          <Menu.Item key="1"><Link to="/content/subject">科目管理</Link></Menu.Item>
          <Menu.Item key="2">章节管理</Menu.Item>
          <Menu.Item key="3">标签管理</Menu.Item>
          <Menu.Item key="4">试题管理</Menu.Item>
          <Menu.Item key="5">试卷管理</Menu.Item>
        </Menu>
      </Col>
      <Col span={19} style={{ padding: 10 }}>
        <Switch>
          <Route path="/content" exact component={ContentIndex} />
          <Route path="/content/subject" exact component={SubjectIndex} />
        </Switch>
      </Col>
    </Row >
  );
};

const ContentIndex = () => {
  return <h1>内容管理</h1>;
};
const SubjectIndex = () => {
  return <h1>科目管理</h1>;
};

export default connect()(Content);
