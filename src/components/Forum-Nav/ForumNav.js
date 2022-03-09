import React from 'react'
import styled from 'styled-components'
import './ForumNav.css'
import { Link, useLocation } from 'react-router-dom'

const ForunArticalAll = styled(Link)`
  display: block;
  ${(props) =>
    props.$active &&
    `
    background-color:#023E73;
    border-left:3px solid #05f2f2;
    text-decoration:none;
  `}
`

export default function ForumNav() {
  const location = useLocation()
  return (
    // <div className="wrap-background">
    // <div className="all-display-flex">
    <div
      className="nav nav-bg d-flex flex-column flex-shrink-0 p-3"
      id="navbar"
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <div className="input-wrapper">
            <input
              className="search-bar form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              required
            />
          </div>
        </li>
        <li>
          <p
            style={{ marginTop: '15px', fontSize: '16px', fontWeight: 'bold' }}
          >
            文章分類
          </p>
          <div className="forum_nav_a-group">
            <ForunArticalAll to="/" $active={location.pathname === '/'}>
              <div className="forum_navIcon_adjust">
                <i className="fa-solid fa-border-all"> </i>
                <a href="/#" className="forum_nav_item">
                  全部
                </a>
              </div>
            </ForunArticalAll>
            <div className="forum_navIcon_adjust">
              <i className="fa-solid fa-rocket"> </i>
              <a href="/#" className="forum_nav_item">
                U-Apextion文章
              </a>
            </div>
            <div className="forum_navIcon_adjust">
              <i className="fa-solid fa-users"> </i>
              <a href="/#" className="forum_nav_item">
                會員文章
              </a>
            </div>
            <div className="forum_navIcon_adjust">
              <i className="fa-solid fa-question"> </i>
              <a href="/#" className="forum_nav_item">
                Q&A
              </a>
            </div>
            <div className="forum_navIcon_adjust">
              <i className="fa-solid fa-tag"> </i>
              <a href="/#" className="forum_nav_item">
                #Hashtags
              </a>
            </div>
          </div>
        </li>
        <li>
          <p
            style={{ marginTop: '15px', fontSize: '16px', fontWeight: 'bold' }}
          >
            個人頁面
          </p>
          <div className="a-group">
            <div className="forum_navIcon_adjust">
              <i className="fa-solid fa-address-card"> </i>
              <a href="/#" className="forum_nav_item">
                個人貼文
              </a>
            </div>
            <div className="forum_navIcon_adjust">
              <i className="fa-solid fa-heart"> </i>
              <a href="/#" className="forum_nav_item">
                按讚貼文
              </a>
            </div>
            <div className="forum_navIcon_adjust">
              <i className="fa-solid fa-bookmark"> </i>
              <a href="/#" className="forum_nav_item">
                個人珍藏
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
