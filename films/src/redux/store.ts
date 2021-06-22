import { configureStore } from '@reduxjs/toolkit'

import { reducer } from './slice'

const initStore = {}

const createStore = (preloadedState = initStore) =>
  configureStore({
    reducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
  })

const store = createStore()

type AppStore = typeof store
type AppDispatch = typeof store.dispatch

export { store, createStore }
export type { AppDispatch, AppStore }
