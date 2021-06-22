import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useDebounce } from '../../hooks'
import { getSearchText, getSearchData, getSearchDataResults, getSearchIsLoading, clearData } from '../../redux'
import { MovieList } from '../MovieList'

const SearchList = memo(function SearchList() {
  const dispatch = useDispatch()

  const searchText = useSelector(getSearchText)
  const searchData = useSelector(getSearchData)
  const isLoadingSearch = useSelector(getSearchIsLoading)

  const debouncedText = useDebounce(searchText, 500)

  useEffect(() => {
    if (debouncedText) {
      dispatch(getSearchDataResults(debouncedText))
    }
  }, [debouncedText, dispatch])

  useEffect(
    () => () => {
      dispatch(clearData())
    },
    [],
  )

  const isUserTyping = debouncedText !== searchText

  return <MovieList loading={isLoadingSearch || isUserTyping} movies={searchData} />
})

export { SearchList }
