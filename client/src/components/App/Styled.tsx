import styled from 'styled-components'

import { Spin } from 'antd'

const SPIN_SIZE = 32

const SpinStyled = styled(Spin)`
  position: absolute;

  top: calc(50% - ${SPIN_SIZE}px);
  left: calc(50% - ${SPIN_SIZE}px);
`

const SpinContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`

export { SpinContainer, SpinStyled, SPIN_SIZE }
