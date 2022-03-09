// import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import LogInPage from './pages/LogInPage'
import HomePage from './pages/HomePage'
import SinglePostPage from './pages/SinglePostPage'
import PublishPage from './pages/PublishPage'
import UArticlePage from './pages/UArticlePage'
import PostCategoryPage from './pages/PostCategoryPage'
import Header from './components/Header'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

// import ForumNav from './components/Forum-Nav'

const Root = styled.div`
  margin-top: 64px;
  background: black;
`
// const AllDisplayFlex = styled.div`
//   display: flex;
// `

function App() {
  return (
    <Root>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/posts/:sid">
            <SinglePostPage />
          </Route>
          <Route path="/posts-category/:art_category_sid">
            <PostCategoryPage />
          </Route>
          <Route path="/u-apexion-articles">
            <UArticlePage />
          </Route>
          <Route path="/publish">
            <PublishPage />
          </Route>
          <Route exact path="/logIn">
            <LogInPage />
          </Route>
        </Switch>
      </Router>
    </Root>
  )
}
export default App
