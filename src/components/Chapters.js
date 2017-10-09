import React, { Component } from 'react';
import { Table, Select } from 'antd';

class Chapters extends Component {
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
    const { chapters, filter, subjects, onChange } = this.props;
    return (
      <div>
        <Select
          size="large"
          onChange={onChange}
          placeholder="全部科目"
          notFoundContent="无可用选项"
          style={{ width: 200 }}
          value={filter}
        >
          {subjects.list.map((subject, index) => {
            return (
              <Select.Option key={index} value={`${subject.id}`}>
                {subject.name}
              </Select.Option>
            );
          })}
        </Select>
        <Table
          dataSource={chapters.list}
          columns={this.columns}
          rowKey={(record, index) => index}
        />
      </div>
    );
  }
}

export default Chapters;
