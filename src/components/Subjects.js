import React, { Component } from 'react';
import { Table } from 'antd';

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '排序',
        dataIndex: 'sort',
      },
      {
        title: '描述',
        dataIndex: 'description',
      },
      {
        title: '标签',
        dataIndex: 'tags',
      },
      {
        title: '操作',
        key: 'action',
      },
    ];
  }

  render() {
    const { list, loading } = this.props;
    return loading
      ? <div>正在加载...</div>
      : <Table dataSource={list} columns={this.columns} rowKey={(r, index) => index} />;
  }
}

export default Subjects;
