import { createAsyncThunk } from '@reduxjs/toolkit'
import { MovieType } from '../../../models'
import { setStorageMovieValue } from '../../../utils'

import { StoreType } from '..'

import { SupportedStores, SavedMoviesActionTypes } from './types'

const saveMovie = createAsyncThunk(
  SavedMoviesActionTypes.SAVE,
  async ({ store, movie }: { store: SupportedStores; movie: MovieType }, { getState }) => {
    const currentStore = (getState() as StoreType)[store].data

    const newStoreValue = [...currentStore, movie]

    setStorageMovieValue(store, newStoreValue)

    return [store, newStoreValue]
  },
)

const removeMovie = createAsyncThunk(
  SavedMoviesActionTypes.REMOVE,
  async ({ store, movie }: { store: SupportedStores; movie: MovieType }, { getState }) => {
    const currentStore = (getState() as StoreType)[store].data

    const newStoreValue = currentStore.filter(({ id }) => id !== movie.id)

    setStorageMovieValue(store, newStoreValue)

    return [store, newStoreValue]
  },
)

export { saveMovie, removeMovie }
