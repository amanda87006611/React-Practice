import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
// location可以拿到網址
import LogInPage from '../../pages/LogInPage'
import HomePage from '../../pages/HomePage'

const HeaderContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 20px;
`

const Brand = styled.h1`
  font-size: 30px;
  margin-bottom: 0;
`

const NavbarList = styled.div`
  display: flex;
  align-items: center;
`
const Nav = styled(Link)`
  ${'' /* 把style調成一個Link */}
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  text-decoration: none;

  ${(props) =>
    props.$active &&
    `
    background:rgba(0,0,0,0.2);
    text-decoration: none;
  `}
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  ${NavbarList} {
    margin-left: 16px;
  }
  ${Nav} {
    margin-right: 16px;
  }
`

export default function App() {
  const location = useLocation()
  console.log(location.pathname)
  //本地網址後的路徑名稱
  return (
    <HeaderContainer>
      <LeftContainer>
        <Brand>Blog</Brand>
        <NavbarList>
          <Nav to="/" $active={location.pathname === '/'}>
            {/* 這邊利用location來判斷是否在active的頁面上 */}
            首頁
          </Nav>
          <Nav to="/new-post" $active={location.pathname === '/new-post'}>
            發布文章
          </Nav>
        </NavbarList>
      </LeftContainer>
      <NavbarList>
        <Nav to="/logIn" $active={location.pathname === '/logIn'}>
          登入
        </Nav>
      </NavbarList>
    </HeaderContainer>
  )
}
