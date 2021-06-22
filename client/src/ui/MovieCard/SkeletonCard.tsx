import React, { memo } from 'react'

import { Card } from 'antd'
import { HeartOutlined, EyeOutlined, YoutubeOutlined } from '@ant-design/icons'

import { SkeletonImage } from './Styled'

const SkeletonCard = memo(function SkeletonCard() {
  return <Card loading cover={<SkeletonImage />} actions={[<HeartOutlined />, <EyeOutlined />, <YoutubeOutlined />]} />
})

export { SkeletonCard }
