import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
// const createHistory = require("history").createBrowserHistory
import LoginPage from '../components/Login'
import NotFoundPage from '../components/NotFoundPage';
import Leaderboard from '../components/Leaderboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <div className="container-fluid">
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/leaderboard" component={Leaderboard} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;