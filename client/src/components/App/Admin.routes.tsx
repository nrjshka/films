import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Admin } from '..'

const AdminRoutes = () => (
  <Switch>
    <Route path="*" component={Admin.Main} />
  </Switch>
)

export { AdminRoutes }
