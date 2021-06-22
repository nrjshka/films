import React, { memo, useState, useCallback } from 'react'

import moment from 'moment'
import { Card, Tag } from 'antd'
import { HeartOutlined, HeartFilled, EyeOutlined, EyeFilled, YoutubeOutlined, YoutubeFilled } from '@ant-design/icons'

import { movieApi } from '../../api'

import { PosterImg, Overview, Title, SkeletonImage, StyledProgress, TagsContainer, DateTagWrapper } from './Styled'
import { MovieCardType } from './types'

const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w185/'

const MovieCard: React.FC<MovieCardType> = memo(function MovieCard(props) {
  const {
    poster_path,
    release_date,
    title,
    overview,
    vote_average,
    onWatchLater,
    onLike,
    isInFavouriteList = false,
    isInWatchList = false,
    id,
  } = props

  const [withTrailer, setTrailerStatus] = useState(true)

  const posterSrc = `${IMG_BASE_URL}${poster_path}`

  const FavouriteComponent = isInFavouriteList ? HeartFilled : HeartOutlined
  const WatchComponent = isInWatchList ? EyeFilled : EyeOutlined
  const YouTubeComponent = withTrailer ? YoutubeOutlined : YoutubeFilled

  const onLikeWrapper = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => onLike(isInFavouriteList, e)
  const onWatchLaterWrapper = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => onWatchLater(isInWatchList, e)

  const onYouTubeClick = useCallback(async () => {
    if (withTrailer) {
      const { results } = await movieApi.getMovieTrailer(id)
      const [trailer] = results

      if (trailer) {
        window.location.href = `https://www.youtube.com/watch?v=${trailer.key}`
      } else {
        setTrailerStatus(false)
      }
    }
  }, [id, setTrailerStatus, withTrailer])

  const outputDate = moment(release_date).format('YYYY MMM')

  return (
    <Card
      hoverable
      cover={poster_path ? <PosterImg alt={title} src={posterSrc} /> : <SkeletonImage />}
      bodyStyle={{ padding: '10px' }}
      actions={[
        <FavouriteComponent onClick={onLikeWrapper} />,
        <WatchComponent onClick={onWatchLaterWrapper} />,
        <YouTubeComponent disabled={!withTrailer} onClick={onYouTubeClick} />,
      ]}
    >
      <Title>{title}</Title>
      <Overview title={overview}>{overview}</Overview>

      <TagsContainer>
        <DateTagWrapper>
          <Tag color="red">{outputDate}</Tag>
        </DateTagWrapper>

        <StyledProgress
          strokeColor="#1890ff"
          strokeWidth={10}
          width={40}
          type="circle"
          percent={vote_average * 10}
          format={(percent) => percent && percent / 10}
        />
      </TagsContainer>
    </Card>
  )
})

export { MovieCard }
