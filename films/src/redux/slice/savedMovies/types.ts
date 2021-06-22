import { MovieType } from '../../../models'

type SavedMoviesType = {
  data: MovieType[]
}

enum SavedMoviesActionTypes {
  SAVE = 'SAVED_MOVIES/SAVE',
  REMOVE = 'SAVED_MOVIES/REMOVE',
}

type SupportedStores = 'watchLater' | 'favourite'

export type { SavedMoviesType, SupportedStores }
export { SavedMoviesActionTypes }
