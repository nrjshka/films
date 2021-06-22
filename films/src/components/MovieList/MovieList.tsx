import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Col, Row, Empty } from 'antd'
import { MovieCard, SkeletonCard } from '../../ui'

import { MovieListProps } from './types'
import { getSavedMovieData, saveMovie, removeMovie, SupportedStores } from '../../redux'
import { MovieType } from '../../models'

const emptyMockArr = new Array(4).fill(0)

const isIdInMovieArray = (data: MovieType[], currentMovie: MovieType) => !!data.find(({ id }) => id === currentMovie.id)

const MovieList: React.FC<MovieListProps> = memo(function MovieList({ loading = false, movies }) {
  const dispatch = useDispatch()

  const watchLaterData = useSelector(getSavedMovieData('watchLater'))
  const favouriteData = useSelector(getSavedMovieData('favourite'))

  const onMovieActionClick = useCallback(
    (store: SupportedStores, id: number) => (flag: boolean) => {
      if (flag) {
        dispatch(removeMovie({ store, movie: movies[id] }))
      } else {
        dispatch(saveMovie({ store, movie: movies[id] }))
      }
    },
    [movies, dispatch],
  )

  if (loading) {
    return (
      <Row justify="center" gutter={[30, 16]}>
        {emptyMockArr.map((_, index) => (
          <Col key={index} xs={12} md={8} lg={6}>
            <SkeletonCard key={index} />
          </Col>
        ))}
      </Row>
    )
  }

  if (!movies.length) {
    return <Empty description="Movie list is empty" />
  }

  return (
    <Row justify="center" gutter={[16, 16]}>
      {movies.map((movie, index) => (
        <Col key={index} xs={12} md={8} lg={6}>
          <MovieCard
            isInFavouriteList={isIdInMovieArray(favouriteData, movie)}
            isInWatchList={isIdInMovieArray(watchLaterData, movie)}
            onLike={onMovieActionClick('favourite', index)}
            onWatchLater={onMovieActionClick('watchLater', index)}
            {...movie}
          />
        </Col>
      ))}
    </Row>
  )
})

export { MovieList }
