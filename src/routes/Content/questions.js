import { connect } from 'dva';
import React from 'react';
import Questions from '../../components/Questions';

const QuestionList = (props) => {
  return <Questions {...props} />;
};

const mapStateToProps = ({ questions, subjects, chapters }) => {
  return { questions, subjects, chapters };
};

export default connect(mapStateToProps)(QuestionList);
