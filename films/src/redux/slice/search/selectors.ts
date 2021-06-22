import { createSelector } from 'reselect'

import { StoreType } from '..'
import { SearchState } from './types'

const searchStoreSelector = (state: StoreType): SearchState => state.search

const getSearchText = createSelector(searchStoreSelector, ({ text }) => text)

const getSearchData = createSelector(searchStoreSelector, ({ data }) => data)

const getSearchIsLoading = createSelector(searchStoreSelector, ({ isLoading }) => isLoading)

export { searchStoreSelector, getSearchText, getSearchData, getSearchIsLoading }
