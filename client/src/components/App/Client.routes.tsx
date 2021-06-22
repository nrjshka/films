import React from 'react'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'

import { Header, PagesContainer, Content } from '../../ui'

import { SavedMoviesList, MainPage } from '..'

const ClientRoutes = () => (
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

export { ClientRoutes }
