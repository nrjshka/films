import styled from 'styled-components'

import { Layout } from 'antd'

const Content = styled(Layout.Content)`
  background-color: ${({ theme }) => theme.colors.layoutBackground};
`

export { Content }
