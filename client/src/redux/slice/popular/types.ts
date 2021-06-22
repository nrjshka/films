import { MovieType } from '../../../models'

type PopularState = {
  readonly isLoading: boolean
  readonly isError: boolean
  readonly data: MovieType[]
}

enum PopularActionTypes {
  GET_DATA = 'POPULAR/GET/DATA',
}

export { PopularActionTypes }
export type { PopularState }
