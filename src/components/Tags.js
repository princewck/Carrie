import React, { Component } from 'react';
import { Table } from 'antd';

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '标签名称',
        dataIndex: 'name',
      },
      {
        title: '图标',
        dataIndex: 'image',
        render(url, data) {
          return url ? <img src={url} alt={data.name} style={{ width: 40 }} /> : '';
        },
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
        title: '操作',
        key: 'action',
      },
    ];
  }

  render() {
    const { tags } = this.props;
    return <Table dataSource={tags} columns={this.columns} rowKey={(r, index) => index} />;
  }
}

export default Subjects;
