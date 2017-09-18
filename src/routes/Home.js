import React from 'react';
import { connect } from 'dva';

const Home = () => {
  return (
    <h1>
      这是首页
    </h1>
  );
};

export default connect()(Home);
