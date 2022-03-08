import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
// import { getPost, getResponse } from '../../data/WebApi'
import './PublishPage.css'
import ForumNav from '../../components/Forum-Nav'
// import PropTypes from 'prop-types'

const Root = styled.div`
  width: 100%;
  ${'' /* border: 1px solid pink; */}
  margin: 0 auto;
  ${'' /* padding: 5%; */}
`

const AllDisplayFlex = styled.div`
  display: flex;
`

export default function PublishPage() {
  return (
    <Root>
      <AllDisplayFlex>
        <ForumNav />
        <div class="forum_artical">
          <div class="row">
            <div class="col">
              <div class="forum_card">
                <div class="forum_card-user">
                  <div class="forum_user-top-left">
                    <div class="forum_user-logo">
                      <img
                        class="forum_cover"
                        src="./imgs 拷貝/person1.png"
                        alt=""
                      />
                    </div>
                    <div class="user-title">
                      <div class="forum_user-name">U-Apexion</div>
                      <div class="forum_post-time">2022/4/20 17:20pm</div>
                    </div>
                  </div>
                  <div class="forum_user-top-right">
                    <i class="fas fa-info"></i>
                    <a href="#/">
                      <p>rules</p>
                    </a>
                  </div>
                </div>
              </div>

              <form style={{ margin: '0 20px' }}>
                <label for="categories" class="form-label">
                  Categories 文章分類
                </label>
                <select
                  class="form-select mb-3 col-12"
                  aria-label="Default select example"
                >
                  <option selected></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Title 標題
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="text" class="form-label">
                    Text 內文
                  </label>
                  <div class="textarea">
                    <textarea
                      name="text"
                      id="text"
                      style={{ width: '100%', height: '200px' }}
                    ></textarea>
                  </div>
                </div>
                <div class="forum_btn-group">
                  <div class="btn-left">
                    <button class="forum_btn">
                      <i class="fas fa-image"></i>Add Image
                    </button>
                  </div>
                  <div class="btn-right">
                    <button type="submit" class="forum_btn forum_btn-white">
                      Save as draft
                    </button>
                    <button type="submit" class="forum_btn">
                      <i class="fas fa-paper-plane"></i>Publish
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* col-right */}
        <div class="col-right">
          <div class="col">
            <div class="card-2">
              <ul class="list-group">
                <li class="list-group-item">
                  <p style={{ fontSize: '16px' }}>
                    {/* <i class="far fa-star"></i> */}
                    發文前必讀
                  </p>
                  <ul>
                    <li>
                      <i class="fas fa-link forum_link"></i>
                      <a href="#/" className="forum_link_item">
                        請查明發文版規後，再進行貼文
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-link forum_link"></i>
                      <a href="#/" className="forum_link_item">
                        有任何疑問 請洽u-apexion客服
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="list-group-item">
                  <p style={{ fontSize: '16px' }}>
                    {/* <i class="fas fa-link"></i> */}
                    本月推薦
                  </p>
                  <ul>
                    <li>
                      <i class="fas fa-link forum_link"></i>
                      <a href="#/" className="forum_link_item">
                        主打行程
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-link forum_link"></i>
                      <a href="#/" className="forum_link_item">
                        主打服裝＆飾品
                      </a>
                    </li>
                    <li>
                      <i class="fas fa-link forum_link"></i>
                      <a href="#/" className="forum_link_item">
                        客製化推薦
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AllDisplayFlex>
    </Root>
  )
}
