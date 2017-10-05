import { connect } from 'dva';
import React, { Component } from 'react';
import Chapters from '../../components/Chapters';


function updateFilter(value) {
  const { dispatch, subjects } = this.props;
  const payload = value || (subjects[0] && subjects[0].name);
  dispatch({ type: 'chapter_filter/change', payload });
}

class ChapterList extends Component {

  componentWillMount() {
    updateFilter.call(this);
  }


  render() {
    const { chapters, chapter_filter, subjects } = this.props;
    return (<Chapters
      filter={chapter_filter}
      chapters={chapters}
      subjects={subjects}
      onChange={(value) => {
        updateFilter.call(this, value);
      }}
    />);
  }
}

const matStateToProps = (state) => {
  const { chapters, subjects, chapter_filter } = state;
  return {
    chapters: chapters.filter(c => !chapter_filter || c.subject === chapter_filter),
    chapter_filter,
    subjects,
  };
};

export default connect(matStateToProps)(ChapterList);
