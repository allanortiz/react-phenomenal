import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

const Home = () => <div>HOME</div>;

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default withRouter(Routes);