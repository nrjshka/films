import * as React from 'react'

import { MovieList } from '../index'

import { render, screen, waitUntilStoreUpdates } from '../../../utils/testUtilts'
import { movieMockNowYouSee, moviewMockSuicide } from '../../../models'
import userEvent from '@testing-library/user-event'
import { createStore } from '../../../redux'

const mockMovieList = [movieMockNowYouSee, moviewMockSuicide]

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: { setItem: jest.fn() },
  })
})

test('<MovieList /> render list with showing movie information', () => {
  render(<MovieList movies={mockMovieList} />)

  const titleFirstMoview = screen.getByRole('heading', {
    name: /now you see me 2/i,
  })
  const titleSecondMoview = screen.getByRole('heading', {
    name: /suicide squad/i,
  })

  expect(titleFirstMoview).toBeInTheDocument()
  expect(titleSecondMoview).toBeTruthy()
})

test('<MovieList /> show skeletons with loading=true prop', () => {
  render(<MovieList loading movies={mockMovieList} />)

  expect.assertions(0)

  try {
    const titleFirstMoview = screen.getByRole('heading', {
      name: /now you see me 2/i,
    })
    const titleSecondMoview = screen.getByRole('heading', {
      name: /suicide squad/i,
    })

    expect(titleFirstMoview).toBeFalsy()
    expect(titleSecondMoview).toBeFalsy()
  } catch (e) {}
})

test('<MovieList /> add movie to watch list', async () => {
  const currentStore = createStore()

  render(<MovieList movies={mockMovieList} />, { store: currentStore })

  const [nowYouSeeWatch] = screen.getAllByRole('img', { name: /eye/i })

  userEvent.click(nowYouSeeWatch)

  await waitUntilStoreUpdates()

  const currentState = currentStore.getState()['watchLater']

  expect(currentState.data.length).toEqual(1)
  expect(currentState.data).toEqual([movieMockNowYouSee])
})

test('<MovieList /> add movie to favourite list', async () => {
  const currentStore = createStore()

  render(<MovieList movies={mockMovieList} />, { store: currentStore })

  const [nowYouSeeFavourite, suicideFavourite] = screen.getAllByRole('img', { name: /heart/i })

  userEvent.click(suicideFavourite)

  await waitUntilStoreUpdates()

  let currentState = currentStore.getState()['favourite']

  expect(currentState.data.length).toEqual(1)
  expect(currentState.data).toEqual([moviewMockSuicide])

  userEvent.click(nowYouSeeFavourite)

  await waitUntilStoreUpdates()

  currentState = currentStore.getState()['favourite']

  expect(currentState.data.length).toEqual(2)
  expect(currentState.data).toEqual([moviewMockSuicide, movieMockNowYouSee])
})
