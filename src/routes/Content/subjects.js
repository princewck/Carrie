import { connect } from 'dva';
import React from 'react';
import Subjects from '../../components/Subjects';

const SubjectList = ({ subjects }) => {
  return <Subjects subjects={subjects} />;
};

export default connect(({ subjects }) => ({ subjects }))(SubjectList);
