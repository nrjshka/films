import { createSlice, CreateSliceOptions } from '@reduxjs/toolkit'

import { saveMovie, removeMovie } from './middleware'

import { SavedMoviesType } from './types'

const initialState: SavedMoviesType = {
  data: [],
}

const savedMoviesFactory = (name: string): CreateSliceOptions => ({
  name,
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveMovie.fulfilled, (state, action) => {
      const [stateName, newValue] = action.payload

      if (name === stateName) {
        state.data = newValue
      }
    })

    builder.addCase(removeMovie.fulfilled, (state, action) => {
      const [stateName, newValue] = action.payload

      if (name === stateName) {
        state.data = newValue
      }
    })
  },
})

const watchLater = createSlice(savedMoviesFactory('watchLater'))
const favourite = createSlice(savedMoviesFactory('favourite'))

export { watchLater, favourite }
export * from './selectors'
export * from './middleware'

export * from './types'
