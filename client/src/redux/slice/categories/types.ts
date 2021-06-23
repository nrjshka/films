import { CategoryType } from '../../../models'

type CategoriesStore = {
  isLoading: boolean
  isError: boolean
  data: CategoryType[]
}

export type { CategoriesStore }
