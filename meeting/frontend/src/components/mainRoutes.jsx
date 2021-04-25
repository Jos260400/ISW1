import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './login/login';
import SignUp from './register/register';

export default function MainRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  );
}
