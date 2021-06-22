import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useQueryParam, StringParam, withDefault } from 'use-query-params'
import { setSearchText } from '../../redux'

import { Search } from '../Search'

const SearchContainer = memo(function SearchContainer() {
  const [search, setSearch] = useQueryParam('q', withDefault(StringParam, ''))
  const dispatch = useDispatch()

  const onChange = (value: string) => setSearch(value, 'replaceIn')

  useEffect(() => {
    dispatch(setSearchText(search))
  }, [search, dispatch])

  return <Search value={search} onChange={onChange} />
})

export { SearchContainer }
