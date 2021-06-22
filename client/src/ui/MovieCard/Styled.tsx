import { Progress, Skeleton } from 'antd'
import styled from 'styled-components'

const PosterImg = styled.img`
  height: 100%;
  max-height: 300px;

  object-fit: cover;
  vertical-align: top;
`

const SkeletonImage = styled(Skeleton.Image)`
  width: 100%;

  &&& > * {
    width: 100%;
    height: auto;
    max-height: 300px;
  }
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`

const Overview = styled.p`
  display: -webkit-box;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  overflow: hidden;
  text-overflow: ellipsis;
`

const StyledProgress = styled(Progress)`
  &&& .ant-progress-text {
    color: #1890ff;
    font-weight: bold;
  }
`

const TagsContainer = styled.div`
  display: flex;

  flex-direction: row;

  justify-content: space-between;
`

const DateTagWrapper = styled.div`
  margin: auto 0;
`

export { PosterImg, Title, Overview, SkeletonImage, StyledProgress, TagsContainer, DateTagWrapper }
