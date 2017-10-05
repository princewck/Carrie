import React, { Component } from 'react';
import { Table, Select } from 'antd';

class Chapters extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '排序',
        dataIndex: 'sort',
        width: 40,
      },
      {
        title: '题干',
        dataIndex: 'description',
      },
      {
        title: '所属科目',
        dataIndex: 'subjects',
      },
      {
        title: '所属章节',
        dataIndex: 'chapters',
      },
      {
        title: '标签',
        dataIndex: 'tags',
      },
      {
        title: '操作',
        key: 'action',
        width: 100,
      },
    ];
  }

  render() {
    const { filter, subjects, questions, onChange } = this.props;
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
          {subjects.map((subject, index) => {
            return <Select.Option key={index} value={subject.name}>{subject.name}</Select.Option>;
          })}
        </Select>
        <Table dataSource={questions} columns={this.columns} rowKey={(record, index) => index} />
      </div>
    );
  }
}

export default Chapters;
