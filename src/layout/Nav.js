import { Menu, Icon, Row, Col } from 'antd';
import React, { Component } from 'react';

const SubMenu = Menu.SubMenu;


export default class App extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Row gutter={8}>
        <Col span={24}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <SubMenu title={<span><Icon type="setting" />个人中心</span>}>
              <Menu.Item key="setting:1">我的信息</Menu.Item>
              <Menu.Item key="setting:2">购买记录</Menu.Item>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
            </Menu.Item>
          </Menu>
        </Col>
        
      </Row>
    );
  }
}
