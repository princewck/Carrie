import React from 'react';
import { Route, Switch, Link, Redirect } from 'dva/router';
import { Col, Row, Menu } from 'antd';
import { connect } from 'dva';
import Subjects from './subjects';
import Chapters from './chapters';
import Tags from './tags';
import Questions from './questions';

const Content = ({ location }) => {
  const selected = location.pathname;
  return (
    <Row>
      <Col span={5}>
        <Menu
          style={{ width: '100%', height: '100%' }}
          defaultSelectedKeys={['1']}
          selectedKeys={[selected]}
          mode="inline"
        >
          <Menu.Item key="/content/subjects"><Link to="/content/subjects">科目管理</Link></Menu.Item>
          <Menu.Item key="/content/chapters"><Link to="/content/chapters">章节管理</Link></Menu.Item>
          <Menu.Item key="/content/tags"><Link to="/content/tags">标签管理</Link></Menu.Item>
          <Menu.Item key="/content/questions"><Link to="/content/questions">试题管理</Link></Menu.Item>
          <Menu.Item key="5">试卷管理</Menu.Item>
        </Menu>
      </Col>
      <Col span={19} style={{ padding: 10 }}>
        <Switch>
          <Redirect exact from="/content" to="/content/subjects" />
          <Route path="/content/subjects" exact component={Subjects} />
          <Route path="/content/chapters" exact component={Chapters} />
          <Route path="/content/tags" exact component={Tags} />
          <Route path="/content/questions" exact component={Questions} />
        </Switch>
      </Col>
    </Row >
  );
};

export default connect()(Content);
