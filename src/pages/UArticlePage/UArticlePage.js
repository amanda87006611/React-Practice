import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import ForumNav from '../../components/Forum-Nav'

const Root = styled.div`
  ${'' /* border: 1px solid red; */}
  width: 100%;
  margin: 0 auto;
  ${'' /* border: 1px solid red; */}/
`
const AllDisplayFlex = styled.div`
  display: flex;
`
const PostTitle = styled(Link)`
  font-size: 15px;
  font-weight: bold;
  color: black;
`

const PostDate = styled.div`
  color: black;
  font-size: 12px;
`
const ForumSortNew = styled(Link)`
  display: flex;
  align-items: center;
  padding-right: 10px;
  border-radius: 10px;
  ${(props) =>
    props.$active &&
    `
    border: 1px solid #05f2f2; 
    background-color:#05f2f2;
  `}
`

function Post({ post }) {
  return (
    <>

      <div class="card">
        <div class="card-body">
          <div class="card-user">
            <div class="user-top">
              <div class="user-logo">
                {/* <img class="cover" src="" alt="" /> */}
              </div>
              <div class="user-title">
                <div class="user-name">user_sid{post.user_sid}</div>
                <PostDate>
                  {new Date(post.art_create_time).toLocaleString()}
                </PostDate>
              </div>
            </div>
            <div class="article-title">
              <PostTitle to={`/posts/${post.sid}`}>{post.art_title}</PostTitle>
            </div>
            <div class="article-text">
              <p className="ellipsis">{post.art_content}</p>
            </div>
          </div>
          <div class="article-hashtag">
            <a href="#/" class="card-link">
              {post.hashtag1}
            </a>
            <a href="#/" class="card-link">
              {post.hashtag2}
            </a>
          </div>
        </div>
        <div class="like-box">
          <div class="heart-group">
            <i class="fas fa-heart"></i>
          </div>
          <div class="comments-group">
            <i class="fas fa-comment"></i>
          </div>
          <div class="save-group">
            <i class="fas fa-bookmark"></i>
          </div>
        </div>
      </div>
    </>
  )
}

Post.propTypes = {
  post: PropTypes.object,
}

export default function UArticlePage() {
  const location = useLocation()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/forum_index/UApexion-article')
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
  }, [])

  return (
    <Root>
      <AllDisplayFlex>
        <ForumNav />
        <div class="artical">
          <div class="sort-and-post">
            <div class="sort">
              <div class="sort-group">
                <div class="sort-icon">
                  <a href="#/" class="forum_justify">
                    <i class="fas fa-sort"> </i>
                    <div className="forum_sort_text">SORT</div>
                  </a>
                </div>
                <div class="sort-new">
                  <ForumSortNew
                    to="/u-apexion-articles"
                    $active={location.pathname === '/u-apexion-articles'}
                    // class="forum_justify"
                  >
                    <i class="fas fa-clock"></i>
                    <div className="forum_sort_text">NEW</div>
                  </ForumSortNew>
                </div>
                <div class="sort-hot">
                  <a href="#/" class="forum_justify">
                    <i class="fas fa-burn"></i>
                    <div className="forum_sort_text"> HOT</div>
                  </a>
                </div>
              </div>
            </div>
            <div class="post">
              <div class="post-group">
                <div class="post">
                  <Link to="/publish">
                    <a href="#/" class="forum_justify">
                      <i class="fas fa-pen"></i>
                      <div className="forum_sort_text"> POST</div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
            <div class="col">
              {posts.map((post) => (
                <Post post={post} />
              ))}
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a style={{ color: '#808080' }} class="page-link" href="#/">
                      <i class="fas fa-angle-double-left"></i>
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a style={{ color: '#05F2F2' }} class="page-link" href="#/">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#/">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#/">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a
                      style={{ display: 'inline' }}
                      class="page-link"
                      href="#/"
                    >
                      Next
                    </a>
                    <i
                      style={{ fontSize: '10px' }}
                      class="fas fa-angle-double-right"
                    ></i>
                  </li>
                </ul>
              </nav>
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
                      <Link to="/posts/31" className="forum_link_item">
                        請查明發文版規後，再進行貼文
                      </Link>
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
