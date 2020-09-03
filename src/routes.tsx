import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import SignupForm from './Signup'

const history = createBrowserHistory()

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={SignupForm}></Route>
      </Switch>
    </Router>
  )
}

export default Routes
