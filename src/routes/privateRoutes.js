import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect, useLocation } from 'react-router-dom'

export const PrivateRoute = (props) => {
  const token = useSelector((state) => state.authReducer.token)
  const location = useLocation()

  if (token)
    return <Route path={props.path} component={props.component} exact />

  return <Redirect to={{ pathname: '/login', state: { from: location } }} />
}
