import React from 'react';
import { connect } from 'dva';
import Tags from '../../components/Tags';

const TagList = ({ tags }) => {
  return <Tags tags={tags} />;
};

export default connect(({ tags }) => ({ tags }))(TagList);
