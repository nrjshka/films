import { createSlice } from '@reduxjs/toolkit'

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
})

const { reducer, actions } = categories

export default reducer
export const {} = actions

export * from './types'
