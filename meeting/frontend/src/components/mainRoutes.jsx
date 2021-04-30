import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './login/login';
import SignUp from './register/register';
import Custom404 from './404/custom_404';
import sideBar from './sideBar/sideBar';

export default function MainRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/404" component={Custom404} />
        <Route path="/sideBar" component={sideBar} />
      </Switch>
    </Router>
  );
}
