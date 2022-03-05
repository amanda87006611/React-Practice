// import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import LogInPage from './pages/LogInPage'
import HomePage from './pages/HomePage'
import SinglePostPage from './pages/SinglePostPage'
import Header from './components/Header'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import ForumNav from './components/Forum-Nav'

const Root = styled.div`
  margin-top: 64px;
  background: black;
`
const AllDisplayFlex = styled.div`
  display: flex;
`

function App() {
  return (
    <Root>
      <Router>
        <Header />
        <AllDisplayFlex>
          <ForumNav />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/posts/:sid">
              <SinglePostPage />
            </Route>
            <Route exact path="/logIn">
              <LogInPage />
            </Route>
          </Switch>
        </AllDisplayFlex>
      </Router>
    </Root>
  )
}
export default App
