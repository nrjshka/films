import { createSelector } from 'reselect'

import { StoreType } from '..'
import { PopularState } from './types'

const popularStoreSelector = (state: StoreType): PopularState => state.popular

const getPopularMovies = createSelector(popularStoreSelector, ({ data }) => data)

const getPopulatMovieByID = (searchID: number) =>
  createSelector(getPopularMovies, (data) => data.find(({ id }) => id === searchID))

export { popularStoreSelector, getPopularMovies, getPopulatMovieByID }
