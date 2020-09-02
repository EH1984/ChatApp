import * as React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Login from './components/Login';
import MainChat from './components/MainChat';

export const App: React.FC = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/mainchat' component={MainChat} />
        </Switch>
      </Fragment>
    </Router>
  );
};
