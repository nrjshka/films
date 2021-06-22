import { createAsyncThunk } from '@reduxjs/toolkit'

import { ErrorResponse, movieApi, ApiError } from '../../../api'

import { PopularActionTypes } from './types'

const getPopulatMoviewData = createAsyncThunk(PopularActionTypes.GET_DATA, async (_, { rejectWithValue }) => {
  try {
    const data = await movieApi.getPopularMovies()

    return data
  } catch (err) {
    return rejectWithValue((err as ApiError<ErrorResponse>).errorData)
  }
})

export { getPopulatMoviewData }
