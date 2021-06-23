import { combineReducers } from '@reduxjs/toolkit'

import popular, { PopularState } from './popular'
import search, { SearchState } from './search'
import app, { AppState } from './app'
import { watchLater, favourite, SavedMoviesType } from './savedMovies'
import categories, { CategoriesStore } from './categories'

const reducer = combineReducers({
  popular,
  search,
  app,
  categories,
  watchLater: watchLater.reducer,
  favourite: favourite.reducer,
})

type StoreType = {
  app: AppState
  categories: CategoriesStore
  popular: PopularState
  search: SearchState
  watchLater: SavedMoviesType
  favourite: SavedMoviesType
}

export { reducer }
export type { StoreType }

export * from './popular'
export * from './search'
export * from './app'
export * from './savedMovies'
export * from './categories'
