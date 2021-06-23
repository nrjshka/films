import { createSlice } from '@reduxjs/toolkit'

import { fetchAllCategories } from './middleware'
import { CategoriesStore } from './types'

const initialState: CategoriesStore = {
  isLoading: false,
  isError: false,
  data: [],
}

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
  },
})

const { reducer, actions } = categories

export default reducer
export const {} = actions

export * from './middleware'
export * from './types'
export * from './selector'
