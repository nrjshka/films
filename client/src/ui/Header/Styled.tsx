import styled from 'styled-components'

import { Layout } from 'antd'

const HeaderStyled = styled(Layout.Header)`
  background-color: ${({ theme }) => theme.colors.layoutBackground};
  height: auto;

  padding-bottom: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`

const Content = styled.div`
  display: flex;

  flex-direction: row;

  & > * {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  color: #1890ff;

  .active {
    color: red;
  }
`

const Section = styled.div`
  display: flex;

  flex-direction: row;

  & > * {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export { HeaderStyled, Content, Container, Section }
