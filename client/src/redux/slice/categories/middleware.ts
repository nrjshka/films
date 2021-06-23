import { createAsyncThunk } from '@reduxjs/toolkit'

import { categoriesApi } from '../../../api'

import { CategoriesActionTypes } from './types'

const fetchAllCategories = createAsyncThunk(CategoriesActionTypes.LOAD, async () => {
  const data = await categoriesApi.getAllCategories()

  return data
})

export { fetchAllCategories }
