import * as React from 'react'

import { Search } from '../index'

import { render, screen } from '../../../utils/testUtilts'
import userEvent from '@testing-library/user-event'

const mockMovieTitle = 'Matrix'
const mockMovieGenre = 'Comedy'

test('<Search /> support value changing', () => {
  const onChange = jest.fn()

  render(<Search value="" onChange={onChange} />)

  const searchElement = screen.getByRole('textbox')

  expect(searchElement).toHaveValue('')

  userEvent.type(searchElement, mockMovieGenre)

  expect(onChange).toBeCalledTimes(mockMovieGenre.length)
  expect(onChange).toHaveBeenLastCalledWith(mockMovieGenre[mockMovieGenre.length - 1])
})

test('<Search /> is not called when value changed', () => {
  const onChange = jest.fn()

  const { rerender } = render(<Search value="" onChange={onChange} />)

  rerender(<Search value={mockMovieTitle} onChange={onChange} />)

  const searchElement = screen.getByRole('textbox')

  expect(searchElement).toHaveValue(mockMovieTitle)
  // while we changing value we dont expected calling onChange
  expect(onChange).not.toBeCalled()
})
