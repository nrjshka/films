import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Admin } from '..';

const App: React.FC = memo(function App() {
  return (
    <Switch>
      <Route path="/admin*" component={Admin.Main} />
    </Switch>
  );
});

export { App };
