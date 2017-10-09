import { connect } from 'dva';
import React, { Component } from 'react';
import Subjects from '../../components/Subjects';


class SubjectList extends Component {

  render() {
    const { subjects } = this.props;
    return <Subjects {...subjects} />;
  }

}


export default connect(({ subjects }) => ({ subjects }))(SubjectList);
