import React from 'react'
// import styled from 'styled-components'
import './ForumNav.css'

export default function ForumNav() {
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
          <p style={{ marginTop: '15px' }}>文章分類</p>
          <div className="a-group">
            <i className="fa-solid fa-border-all">
              <a href="/#">全部</a>
            </i>
            <i className="fa-solid fa-rocket">
              <a href="/#">U-Apextion文章</a>
            </i>
            <i className="fa-solid fa-users">
              <a href="/#">會員文章</a>
            </i>
            <i className="fa-solid fa-question">
              <a href="/#">Q&A</a>
            </i>
            <i className="fa-solid fa-tag">
              <a href="/#">#Hashtag</a>
            </i>
          </div>
        </li>
        <li>
          <p style={{ marginTop: '15px' }}>個人頁面</p>
          <div className="a-group">
            <i className="fa-solid fa-address-card">
              <a href="/#">個人貼文</a>
            </i>
            <i className="fa-solid fa-heart">
              <a href="/#">按讚貼文</a>
            </i>
            <i className="fa-solid fa-bookmark">
              <a href="/#">個人珍藏</a>
            </i>
          </div>
        </li>
      </ul>
    </div>
    // </div>
    // </div>
  )
}
