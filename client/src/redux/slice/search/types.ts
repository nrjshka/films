import { MovieType } from '../../../models'

type SearchState = {
  text: string
  data: MovieType[]
  isError: boolean
  isLoading: boolean
}

enum SearchActionTypes {
  GET_DATA = 'SEARCH/GET/DATA',
}

export { SearchActionTypes }
export type { SearchState }
