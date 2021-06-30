import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import routes, { RouteProps } from '../utils/merge-routes'

function Routes() {
  return (
    <Switch>
      {routes.map((route: RouteProps) => (
        <Route
          key={route.name}
          path={route.path}
          component={route.component}
          exact
        />
      ))}
    </Switch>
  )
}

export default Routes
