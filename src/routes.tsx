import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Signup from './Signup'
import Login from './Login'

const history = createBrowserHistory()

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
      </Switch>
    </Router>
  )
}

export default Routes
