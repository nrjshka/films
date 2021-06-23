import { CategoryType } from '../../../models'

type CategoriesStore = {
  isLoading: boolean
  isError: boolean
  data: CategoryType[]
}

enum CategoriesActionTypes {
  LOAD = 'CATEGORIES/LOAD',
}

export type { CategoriesStore }
export { CategoriesActionTypes }
