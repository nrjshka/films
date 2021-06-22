import { Tag } from 'antd'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getSavedMovieData } from '../../redux'

import { SearchContainer as Search } from './SearchContainer'

import { Content, Container, HeaderStyled, Section } from './Styled'

const Header = memo(function Header() {
  const watchLaterData = useSelector(getSavedMovieData('watchLater'))
  const favouriteData = useSelector(getSavedMovieData('favourite'))

  return (
    <HeaderStyled>
      <Container>
        <Content>
          <NavLink exact to="/" activeClassName="active">
            <Section>All</Section>
          </NavLink>
          <NavLink exact to="/watchLater" activeClassName="active">
            <Section>
              <div>Watch Later</div>
              {!!watchLaterData.length && (
                <div>
                  <Tag color="purple">{watchLaterData.length}</Tag>
                </div>
              )}
            </Section>
          </NavLink>
          <NavLink exact to="/favourite" activeClassName="active">
            <Section>
              <div>Favourite</div>
              {!!favouriteData.length && (
                <div>
                  <Tag color="purple">{favouriteData.length}</Tag>
                </div>
              )}
            </Section>
          </NavLink>
        </Content>
        <Content>
          <Search />
        </Content>
      </Container>
    </HeaderStyled>
  )
})

export { Header }
