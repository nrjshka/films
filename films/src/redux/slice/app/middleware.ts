import { createAsyncThunk } from '@reduxjs/toolkit'

import { parse } from 'query-string'

import { getAllStorageVars } from '../../../utils'

import { setSearchText } from '../search'

import { watchLater as watchLaterStore, favourite as favouriteStore } from '../savedMovies'

import { AppActionTypes } from './types'

// initialize app
const loadApp = createAsyncThunk(AppActionTypes.LOAD, async (_, { dispatch }) => {
  const { q = '' } = parse(window.location.search)
  const { watchLater, favourite } = getAllStorageVars()

  await dispatch(setSearchText(q))
  await dispatch(watchLaterStore.actions.setData(watchLater || []))
  await dispatch(favouriteStore.actions.setData(favourite || []))
})

export { loadApp }
