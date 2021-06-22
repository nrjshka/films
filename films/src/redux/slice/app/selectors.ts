import { createSelector } from 'reselect'

import { StoreType } from '..'
import { AppState } from './types'

const appStateSelector = (state: StoreType): AppState => state.app

const isAppLoaded = createSelector(appStateSelector, ({ isLoading }) => isLoading)

export { appStateSelector, isAppLoaded }
