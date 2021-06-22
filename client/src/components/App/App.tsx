import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { SpinStyled, SpinContainer } from './Styled'
import { isAppLoaded } from '../../redux'

import { AdminRoutes } from './Admin.routes'
import { ClientRoutes } from './Client.routes'

const App: React.FC = memo(function App() {
  const loading = useSelector(isAppLoaded)

  if (loading) {
    return (
      <SpinContainer>
        <SpinStyled size="large" />
      </SpinContainer>
    )
  }

  return (
    <Switch>
      <Route path="/admin*" component={AdminRoutes} />
      <Route path="*" component={ClientRoutes} />
    </Switch>
  )
})

export { App }
