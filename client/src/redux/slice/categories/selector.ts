import { createSelector } from 'reselect'

import { StoreType } from '..'
import { CategoriesStore } from './types'

const categoriesStateSelector = (state: StoreType): CategoriesStore => state.categories

const getCategories = createSelector(categoriesStateSelector, ({ data }) => data)

export { categoriesStateSelector, getCategories }
