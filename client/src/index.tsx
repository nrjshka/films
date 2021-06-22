import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Router, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import reportWebVitals from './reportWebVitals'

import 'antd/dist/antd.css'

import { App } from './components'
import { theme } from './ui'
import { appHistory } from './utils'
import { loadApp, store } from './redux'

store.dispatch(loadApp())

ReactDOM.render(
  <React.StrictMode>
    <Router history={appHistory}>
      <QueryParamProvider ReactRouterRoute={Route}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </QueryParamProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
