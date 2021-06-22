import { createAsyncThunk } from '@reduxjs/toolkit'

import { ErrorResponse, movieApi, ApiError } from '../../../api'
import { authApi } from '../../../api/AuthApi'
import { MovieType } from '../../../models'
import { appHistory } from '../../../utils'

import { PopularActionTypes } from './types'

const updateFilm = createAsyncThunk(
  PopularActionTypes.CREATE,
  async (
    { type, data, id }: { type: 'create' | 'edit'; data: Partial<MovieType>; id?: string },
    { rejectWithValue, dispatch },
  ) => {
    try {
      if (type === 'create') {
        await authApi.createFilm(data)
      } else {
        await authApi.editFilm(id!, data)
      }
      appHistory.replace('/admin')

      await dispatch(getPopulatMoviewData())
    } catch (err) {
      return rejectWithValue({ message: 'Error!' })
    }
  },
)

const getPopulatMoviewData = createAsyncThunk(PopularActionTypes.GET_DATA, async (_, { rejectWithValue }) => {
  try {
    const data = await movieApi.getPopularMovies()

    return data
  } catch (err) {
    return rejectWithValue((err as ApiError<ErrorResponse>).errorData)
  }
})

export { getPopulatMoviewData, updateFilm }
