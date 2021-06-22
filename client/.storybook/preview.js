import React from 'react'
import {  ThemeProvider } from 'styled-components';

import { theme } from '../src/ui'

import 'antd/dist/antd.css'

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}

const decorators = [withThemeProvider]

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export { decorators, parameters }