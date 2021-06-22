import { createSelector } from 'reselect'

import { StoreType } from '..'
import { PopularState } from './types'

const popularStoreSelector = (state: StoreType): PopularState => state.popular

const getPopularMovies = createSelector(popularStoreSelector, ({ data }) => data)

export { popularStoreSelector, getPopularMovies }
