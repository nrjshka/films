import { createAsyncThunk } from '@reduxjs/toolkit'

import { ErrorResponse, movieApi, ApiError } from '../../../api'

import { SearchActionTypes } from './types'

const getSearchDataResults = createAsyncThunk(
  SearchActionTypes.GET_DATA,
  async (value: string, { rejectWithValue }) => {
    try {
      const data = await movieApi.getSearchResults(value)

      return data
    } catch (err) {
      return rejectWithValue((err as ApiError<ErrorResponse>).errorData)
    }
  },
)

export { getSearchDataResults }
