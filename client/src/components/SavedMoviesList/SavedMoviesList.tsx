import React, { memo } from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector } from 'react-redux'

import { MovieList } from '..'

import { SupportedStores, getSavedMovieData, getSearchText } from '../../redux'

const isSubString = (value: string, sub: string) => value.toLowerCase().indexOf(sub.toLowerCase()) >= 0

const SavedMoviesList: React.FC<RouteComponentProps<{ category: SupportedStores }>> = memo(function SavedMoviesList(
  props,
) {
  const { category } = props.match.params

  const searchText = useSelector(getSearchText)
  const data = useSelector(getSavedMovieData(category))

  const movies = data.filter(
    ({ title, overview }) => isSubString(title, searchText) || isSubString(overview, searchText),
  )

  return <MovieList movies={movies} />
})

export { SavedMoviesList }
