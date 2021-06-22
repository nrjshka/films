import React from 'react'
import { ArgType } from '@storybook/api'
import styled from 'styled-components'

import { movieMockNowYouSee, moviewMockSuicide } from '../../models'

import { MovieCard, SkeletonCard } from './index'

import { MovieCardType } from './types'

const CardContainer = styled.div`
  width: 320px;
`

const Template: React.FC<MovieCardType> = (props) => (
  <CardContainer>
    <MovieCard {...props} />
  </CardContainer>
)

const handlers = {
  onWatchLater: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {},
  onLike: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {},
}

const SuicideSquad: ArgType = Template.bind({})

SuicideSquad.args = { ...moviewMockSuicide, ...handlers }

const NowYouSeeMe: ArgType = Template.bind({})

NowYouSeeMe.args = { ...movieMockNowYouSee, ...handlers }

const Skeleton: React.FC = (props) => (
  <CardContainer>
    <SkeletonCard {...props} />
  </CardContainer>
)

export default {
  component: MovieCard,
  title: 'Movie/Card',
}

export { SuicideSquad, NowYouSeeMe, Skeleton }
