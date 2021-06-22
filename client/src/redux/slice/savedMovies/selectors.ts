import { createSelector } from 'reselect'

import { StoreType } from '..'

import { SavedMoviesType, SupportedStores } from './types'

const savedMovieStoreSelector = (storeName: SupportedStores) => (state: StoreType): SavedMoviesType => state[storeName]

const getSavedMovieData = (storeName: SupportedStores) =>
  createSelector(savedMovieStoreSelector(storeName), ({ data }) => data)

export { savedMovieStoreSelector, getSavedMovieData }
