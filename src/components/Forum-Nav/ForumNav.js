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
          <p style={{ marginTop: '15px' }}>CATEGORY</p>
          <div className="a-group">
            <i className="fa-solid fa-border-all">
              <a href="/#">All</a>
            </i>
            <i className="fa-solid fa-rocket">
              <a href="/#">By U-Apextion</a>
            </i>
            <i className="fa-solid fa-users">
              <a href="/#">By U-Users</a>
            </i>
          </div>
        </li>
        <li>
          <p style={{ marginTop: '15px' }}>MENU</p>
          <div className="a-group">
            <i className="fa-solid fa-question">
              <a href="/#">Questions</a>
            </i>
            <i className="fa-solid fa-tag">
              <a href="/#">Tags</a>
            </i>
          </div>
        </li>
        <li>
          <p style={{ marginTop: '15px' }}>PERSONAL NAVIGATION</p>
          <div className="a-group">
            <i className="fa-solid fa-address-card">
              <a href="/#">Your Posts</a>
            </i>
            <i className="fa-solid fa-heart">
              <a href="/#">Your Likes</a>
            </i>
            <i className="fa-solid fa-bookmark">
              <a href="/#">Your Saves</a>
            </i>
          </div>
        </li>
      </ul>
    </div>
    // </div>
    // </div>
  )
}
