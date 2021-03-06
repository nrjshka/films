import { createSlice } from '@reduxjs/toolkit'
import { loadApp, validateToken, checkLoginForm } from './middleware'

import { AppState } from './types'

const initialState: AppState = {
  isLoading: true,
  user: {
    isAuthorized: false,
    token: null,
  },
}

const search = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.user.token = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadApp.fulfilled, (state) => {
      state.isLoading = false
    })

    builder.addCase(validateToken.rejected, (state) => {
      state.user = {
        isAuthorized: false,
        token: null,
      }
    })

    builder.addCase(validateToken.fulfilled, (state, action) => {
      const { token } = action.payload

      state.user = {
        isAuthorized: true,
        token,
      }
    })

    builder.addCase(checkLoginForm.rejected, (state, action) => {
      state.user = {
        isAuthorized: false,
        token: null,
      }
    })

    builder.addCase(checkLoginForm.fulfilled, (state, action) => {
      state.user = {
        isAuthorized: true,
        token: action.payload,
      }
    })
  },
})

const { reducer, actions } = search

export default reducer
export const {} = actions

export * from './middleware'
export * from './selectors'

export * from './types'
