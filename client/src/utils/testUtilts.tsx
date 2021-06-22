import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { render, RenderOptions, waitFor } from '@testing-library/react'

import { theme } from '../ui'
import { AppStore, createStore } from '../redux'

const customRender = (ui: React.ReactElement, options?: { store: AppStore } & Omit<RenderOptions, 'queries'>) => {
  const store = options?.store || createStore()

  const AllTheProviders: React.FC = ({ children }) => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    )
  }

  return render(ui, { wrapper: AllTheProviders, ...options })
}

const waitUntilStoreUpdates = () => waitFor(() => {}, { timeout: 500 })

export * from '@testing-library/react'

export { customRender as render, waitUntilStoreUpdates }
