import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { PopularMovies, SearchList } from '..'

import { getSearchText } from '../../redux'

const MainPage: React.FC = memo(function MainPage() {
  const searchText = useSelector(getSearchText)

  if (searchText) {
    return <SearchList />
  }

  return <PopularMovies />
})

export { MainPage }
