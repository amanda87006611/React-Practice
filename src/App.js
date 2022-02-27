import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import LogInPage from './pages/LogInPage'
import HomePage from './pages/HomePage'
import SinglePostPage from './pages/SinglePostPage'
import Header from './components/Header'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const Root = styled.div`
  padding-top: 64px;
`

function App() {
  return (
    <Root>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/posts/:id">
            <SinglePostPage />
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
