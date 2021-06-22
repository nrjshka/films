import { createSlice } from '@reduxjs/toolkit'
import { loadApp } from './middleware'

import { AppState } from './types'

const initialState: AppState = {
  isLoading: true,
}

const search = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadApp.fulfilled, (state) => {
      state.isLoading = false
    })
  },
})

const { reducer, actions } = search

export default reducer
export const {} = actions

export * from './middleware'
export * from './selectors'

export * from './types'
