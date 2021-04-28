import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './login/login';
import SignUp from './register/register';
import Custom_404 from './404/custom_404';

export default function MainRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/404" component={Custom_404} />
      </Switch>
    </Router>
  );
}
