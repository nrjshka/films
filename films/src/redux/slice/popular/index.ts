import { createSlice } from '@reduxjs/toolkit'

import { getPopulatMoviewData } from './middleware'

import { PopularState } from './types'

const initialState: PopularState = {
  isError: false,
  isLoading: false,
  data: [],
}

const popular = createSlice({
  name: 'popular',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getPopulatMoviewData
    builder.addCase(getPopulatMoviewData.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })

    builder.addCase(getPopulatMoviewData.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.data = action.payload
    })

    builder.addCase(getPopulatMoviewData.rejected, (state) => {
      state.isLoading = false
      state.isError = true
    })
  },
})

const { reducer, actions } = popular

export default reducer
export const {} = actions

export * from './selectors'
export * from './middleware'

export * from './types'
