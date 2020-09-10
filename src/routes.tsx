import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Signup from './views/Signup'
import Login from './views/Login'
import PrivateRoute from './components/PrivateRoute'
import Boards from './views/Boards'

const history = createBrowserHistory()

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <PrivateRoute exact path="/" component={Boards}></PrivateRoute>
      </Switch>
    </Router>
  )
}

export default Routes
