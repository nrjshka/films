import React, { memo, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPopularMovies, getPopulatMoviewData } from '../../../redux'
import { MovieCard } from '../../../ui'

const stubList = {
  onWatchLater: Function.prototype,
  onLike: Function.prototype,
}

const Main = styled.main`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  justify-items: center;
  align-items: center;

  gap: 10px;

  width: 80%;
  max-width: 980px;

  margin: auto;
  padding: 50px 0;
`

const List = memo(function List() {
  const popularFilms = useSelector(getPopularMovies)

  return (
    <Main>
      {popularFilms.map((film) => (
        <Link to={`/admin/edit/${film.id}`} key={film.id}>
          {/* @ts-ignore */}
          <MovieCard {...film} {...stubList} isWithoutBottomTab />
        </Link>
      ))}
      <Link to="/admin/create">
        <button>Add film+</button>
      </Link>
    </Main>
  )
})

export { List }
