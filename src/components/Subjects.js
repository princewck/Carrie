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
    const { subjects } = this.props;
    return <Table dataSource={subjects} columns={this.columns} rowKey={(r, index) => index} />;
  }
}

export default Subjects;
