import { createSlice } from '@reduxjs/toolkit'
import { getSearchDataResults } from './middleware'

import { SearchState } from './types'

const initialState: SearchState = {
  text: '',
  data: [],
  isError: false,
  isLoading: false,
}

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      const { payload } = action

      state.text = payload
    },

    clearData: (state) => {
      state.data = []
    },
  },
  extraReducers: (builder) => {
    // getSearchDataResults
    builder.addCase(getSearchDataResults.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })

    builder.addCase(getSearchDataResults.fulfilled, (state, action) => {
      state.data = action.payload
      state.isError = false
      state.isLoading = false
    })

    builder.addCase(getSearchDataResults.rejected, (state) => {
      state.isLoading = false
      state.isError = true
      state.data = []
    })
  },
})

const { reducer, actions } = search

export default reducer
export const { setSearchText, clearData } = actions

export * from './selectors'
export * from './middleware'

export * from './types'
