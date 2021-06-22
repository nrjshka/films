import styled from 'styled-components'

const ParentContainer = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`

const xlBreakPoint = 1200

const ChildContainer = styled.div`
  display: flex;

  max-width: ${xlBreakPoint}px;
  width: 100%;
  height: 100%;

  margin: auto;
  align-self: center;
`

const PagesContainer: React.FC = ({ children }) => (
  <ParentContainer>
    <ChildContainer>{children}</ChildContainer>
  </ParentContainer>
)

export { PagesContainer }
