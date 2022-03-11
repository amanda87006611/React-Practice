// import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import LogInPage from './pages/LogInPage'
import ForumHomePage from './pages/ForumHomePage'
import ForumSinglePostPage from './pages/ForumSinglePostPage'
import ForumPublishPage from './pages/ForumPublishPage'
import ForumUArticlePage from './pages/ForumUArticlePage'
import ForumPostCategoryPage from './pages/ForumPostCategoryPage'
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
            <ForumHomePage />
          </Route>
          <Route path="/posts/:sid">
            <ForumSinglePostPage />
          </Route>
          <Route path="/posts-category/:art_category_sid">
            <ForumPostCategoryPage />
          </Route>
          <Route path="/u-apexion-articles">
            <ForumUArticlePage />
          </Route>
          <Route path="/publish">
            <ForumPublishPage />
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
