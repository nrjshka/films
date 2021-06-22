import { createAsyncThunk } from '@reduxjs/toolkit'

import { parse } from 'query-string'

import { appHistory, getAllStorageVars } from '../../../utils'

import { setSearchText } from '../search'

import { watchLater as watchLaterStore, favourite as favouriteStore } from '../savedMovies'

import { AppActionTypes } from './types'
import { authApi } from '../../../api/AuthApi'
import { setStorageValue } from '../../../utils/localStorage'
import { getPopulatMoviewData } from '../popular'

const registration = createAsyncThunk(
  AppActionTypes.REGISTRATION,
  async (params: { email: string; password: string; fullName: string }, { rejectWithValue }) => {
    try {
      await authApi.registration(params)

      appHistory.replace('/admin')
    } catch (e) {
      return rejectWithValue({ message: 'Error with registration' })
    }
  },
)

const checkLoginForm = createAsyncThunk(
  AppActionTypes.LOGIN,
  async (params: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const data = await authApi.login(params)

      // @ts-ignore
      const { access_token: token } = data

      await authApi.setTokenHeader(token)
      setStorageValue('token', token)

      return token
    } catch (e) {
      return rejectWithValue({ message: 'Error with loggin' })
    }
  },
)

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

  await Promise.all([
    dispatch(getPopulatMoviewData()),
    dispatch(setSearchText(q)),
    dispatch(watchLaterStore.actions.setData(watchLater || [])),
    dispatch(favouriteStore.actions.setData(favourite || [])),
    dispatch(validateToken(token || '')),
  ])
})

export { loadApp, validateToken, checkLoginForm, registration }
