import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import LoginPage from '../components/Login'
import NotFoundPage from '../components/NotFoundPage';
import Leaderboard from '../components/Leaderboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <PublicRoute path="/login" component={LoginPage} exact={true} />
        <PrivateRoute path="/" component={Leaderboard} />
        <Route component={NotFoundPage} />
      </Switch>
  </Router>
)

export default AppRouter;