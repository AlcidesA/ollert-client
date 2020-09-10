import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import User from '../providers/User'

type Props = {
  component: React.FC
  [key: string]: any
}

const PrivateRoute = ({ component: Component, ...rest }: Props) => User.isAuthenticated() ? <Route {...rest} component={Component} /> : <Redirect to="/login" />

export default PrivateRoute
