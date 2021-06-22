import * as React from 'react'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { MovieCard } from '..'

import { render, screen, fireEvent, waitUntilStoreUpdates } from '../../../utils/testUtilts'
import { movieMockNowYouSee } from '../../../models'

import { API_PREFIX } from '../../../utils'

const server = setupServer(
  rest.get(`${API_PREFIX}/movie/${movieMockNowYouSee.id}/videos`, async (req, res, ctx) => {
    return res(ctx.json({ results: [{ key: '123456' }] }))
  }),
)

beforeAll(() => server.listen())
afterAll(() => server.close())

beforeEach(() => {
  global.window = Object.create(window)

  Object.defineProperty(window, 'location', {
    writable: true,
    value: { assign: jest.fn() },
  })
})

test('<MovieCard /> click on buttons call the handlers', () => {
  const onWatchLater = jest.fn()
  const onLike = jest.fn()

  render(<MovieCard {...movieMockNowYouSee} onWatchLater={onWatchLater} onLike={onLike} />)

  const likeButton = screen.getByRole('img', { name: /heart/i })
  const onWatchButton = screen.getByRole('img', { name: /eye/i })

  fireEvent.click(onWatchButton)
  fireEvent.click(likeButton)

  expect(onWatchLater).toHaveBeenCalledTimes(1)
  expect(onLike).toHaveBeenCalledTimes(1)
})

test('<MovieCard /> click on youtube opens wwww.youtube.com', async () => {
  const onWatchLater = jest.fn()
  const onLike = jest.fn()

  render(<MovieCard {...movieMockNowYouSee} onWatchLater={onWatchLater} onLike={onLike} />)

  const youtubeButton = screen.getByRole('img', { name: /youtube/i })

  fireEvent.click(youtubeButton)

  expect(window.location.assign).not.toHaveBeenCalledWith('youtube')
})
