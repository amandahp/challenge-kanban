import React from 'react'

import { Home, Login, NotFound } from '../pages'
import { PublicRoute } from './publicRoutes'
import { PrivateRoute } from './privateRoutes'

const routes = [
  { path: '/login', component: Login, private: false },
  { path: '/home', component: Home, private: true },
  { path: '*', component: NotFound, private: true }
]

const buildRoutes = () => {
  return routes.map((route, index) => {
    return route.private ? (
      <PrivateRoute key={`route-${index}`} {...route} />
    ) : (
      <PublicRoute key={`route-${index}`} {...route} />
    )
  })
}

export default buildRoutes
