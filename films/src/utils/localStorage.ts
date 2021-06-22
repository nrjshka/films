import { MovieType } from '../models'

enum StorageValues {
  watchLater = 'STORAGE/WATCH_LATER',
  favourite = 'STORAGE/FAVOURITE',
}

const getStorageValue = (key: StorageValues): [] | null => {
  const value = localStorage.getItem(key)

  if (!value) {
    return null
  }

  return JSON.parse(value)
}

const setStorageMovieValue = (key: keyof typeof StorageValues, value: MovieType[]): void => {
  localStorage.setItem(StorageValues[key], JSON.stringify(value))
}

const getAllStorageVars = () => ({
  watchLater: getStorageValue(StorageValues.watchLater),
  favourite: getStorageValue(StorageValues.favourite),
})

export { getAllStorageVars, setStorageMovieValue }
