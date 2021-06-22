import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Layout } from 'antd'

import { Header, PagesContainer, Content } from '../../ui'

import { SavedMoviesList, MainPage } from '..'
import { Switch, Route } from 'react-router-dom'

import { SpinStyled, SpinContainer } from './Styled'
import { isAppLoaded } from '../../redux'

const App: React.FC = memo(function App() {
  const loading = useSelector(isAppLoaded)

  if (loading) {
    return (
      <SpinContainer>
        <SpinStyled size="large" />
      </SpinContainer>
    )
  }

  return (
    <PagesContainer>
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/:category(watchLater|favourite)" component={SavedMoviesList} />
            <Route path="*" component={MainPage} />
          </Switch>
        </Content>
      </Layout>
    </PagesContainer>
  )
})

export { App }
