import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Home from './routes/Home';
import Products from './routes/products';
import Frame from './layout/Frame';
import Content from './routes/Content/index';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Frame>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/home" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/content" component={Content} />
        </Switch>
      </Frame>
    </Router>
  );
}

export default RouterConfig;
