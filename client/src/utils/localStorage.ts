import { MovieType } from '../models'

enum StorageValues {
  watchLater = 'STORAGE/WATCH_LATER',
  favourite = 'STORAGE/FAVOURITE',
  token = 'STORAGE/TOKEN',
}

const getStorageValue = <T = []>(key: StorageValues): string | T | null => {
  const value = localStorage.getItem(key)

  if (!value) {
    return null
  }

  try {
    const data = JSON.parse(value)

    return data
  } catch (__) {
    return value as string
  }
}

const setStorageMovieValue = (key: keyof typeof StorageValues, value: MovieType[]): void => {
  localStorage.setItem(StorageValues[key], JSON.stringify(value))
}

const setStorageValue = (key: keyof typeof StorageValues, value: string | null): void => {
  if (!value) {
    localStorage.removeItem(StorageValues[key])
  } else {
    localStorage.setItem(StorageValues[key], value)
  }
}

const getAllStorageVars = () => ({
  watchLater: getStorageValue(StorageValues.watchLater),
  favourite: getStorageValue(StorageValues.favourite),
  token: getStorageValue<string>(StorageValues.token),
})

export { getAllStorageVars, setStorageMovieValue, setStorageValue }
