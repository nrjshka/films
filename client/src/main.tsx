import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { appHistory } from './utils';

import { App } from './components';

ReactDOM.render(
  <Router history={appHistory}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);
