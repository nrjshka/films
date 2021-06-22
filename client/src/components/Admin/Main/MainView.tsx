import { Switch, Route } from 'react-router-dom'

import { Body } from './Body'
import { List } from './List'

const MainView = () => {
  return (
    <Switch>
      <Route path="/admin/:command(edit|create)/:id?" component={Body} />
      <Route path="/admin*" component={List} />
    </Switch>
  )
}

export { MainView }
