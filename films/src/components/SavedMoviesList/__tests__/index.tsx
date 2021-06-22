import * as React from 'react'

import { SavedMoviesList } from '..'

import { render, screen, waitFor } from '../../../utils/testUtilts'
import { RouteComponentProps } from 'react-router-dom'
import { createStore, SupportedStores } from '../../../redux'
import { movieMockNowYouSee, moviewMockSuicide } from '../../../models'

const mockHistoryParams = {
  match: { params: { category: 'favourite' } },
  history: {},
  location: {},
} as RouteComponentProps<{ category: SupportedStores }>

const initStoreConfig = { favourite: { data: [movieMockNowYouSee, moviewMockSuicide] } }

test('<SavedMoviesList /> filters values using search text store value', async () => {
  const store = createStore({ ...initStoreConfig, search: { text: 'suicide squad' } })

  render(<SavedMoviesList {...mockHistoryParams} />, { store })

  await waitFor(() => {
    expect(screen.findByRole('heading', { name: /suicide squad/i })).toBeTruthy()
  })
})

test('<SavedMoviesList /> filters values show empty list', () => {
  const store = createStore({ ...initStoreConfig, search: { text: 'Param!' } })

  render(<SavedMoviesList {...mockHistoryParams} />, { store })

  const emptyList = screen.getByText(/movie list is empty/i)

  expect(emptyList).toBeTruthy()
})
