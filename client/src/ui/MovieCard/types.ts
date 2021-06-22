import { MovieType } from '../../models'
import React from 'react'

type MovieCardType = {
  onWatchLater: (flag: boolean, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  onLike: (flag: boolean, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  isInWatchList?: boolean
  isInFavouriteList?: boolean
  isWithoutBottomTab?: boolean
} & MovieType

export type { MovieCardType }
