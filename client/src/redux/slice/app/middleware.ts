import { createAsyncThunk } from '@reduxjs/toolkit'

import { parse } from 'query-string'

import { getAllStorageVars } from '../../../utils'

import { setSearchText } from '../search'

import { watchLater as watchLaterStore, favourite as favouriteStore } from '../savedMovies'

import { AppActionTypes } from './types'
import { authApi } from '../../../api/AuthApi'
import { setStorageValue } from '../../../utils/localStorage'

const validateToken = createAsyncThunk(AppActionTypes.TOKEN, async (token: string, { rejectWithValue }) => {
  try {
    await authApi.validateToken(token)

    await authApi.setTokenHeader(token)

    return {
      token,
    }
  } catch (e) {
    setStorageValue('token', null)

    return rejectWithValue({ test: '123' })
  }
})

// initialize app
const loadApp = createAsyncThunk(AppActionTypes.LOAD, async (_, { dispatch }) => {
  const { q = '' } = parse(window.location.search)
  const { watchLater, favourite, token } = getAllStorageVars()

  await dispatch(setSearchText(q))
  await dispatch(watchLaterStore.actions.setData(watchLater || []))
  await dispatch(favouriteStore.actions.setData(favourite || []))
  await dispatch(validateToken(token || ''))
})

export { loadApp, validateToken }
