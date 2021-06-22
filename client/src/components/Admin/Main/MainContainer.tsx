import React, { memo } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isUserAuthorizedSelector } from '../../../redux'

import { MainView } from './MainView'
import { Login } from '../Login'
import { Registration } from '../Registration'

const MainContainer = memo(function MainContainer() {
  const isAutorized = useSelector(isUserAuthorizedSelector)

  if (isAutorized) {
    return <MainView />
  }

  return (
    <Switch>
      <Route path="/admin/registration" component={Registration} />
      <Route path="*" component={Login} />
    </Switch>
  )
})

export { MainContainer }
