import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPopularMovies, getPopulatMoviewData } from '../../redux'
import { MovieList } from '../MovieList'

const PopularMovies: React.FC = memo(function MainPage(props) {
  const dispatch = useDispatch()
  const popularMovies = useSelector(getPopularMovies)
  const isPopularMovieEmpty = !popularMovies.length

  useEffect(() => {
    if (!popularMovies.length) {
      dispatch(getPopulatMoviewData())
    }
  }, [dispatch, popularMovies])

  return <MovieList loading={isPopularMovieEmpty} movies={popularMovies} />
})

export { PopularMovies }
