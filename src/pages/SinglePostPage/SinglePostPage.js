import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
// import { getPost } from '../../data/WebApi'
import { getPost } from '../../data/WebApi'
import './SinglePostPage.css'
// import PropTypes from 'prop-types'

// import ForumNav from '../../components/Forum-Nav'

const Root = styled.div`
  width: 100%;
  ${'' /* border: 1px solid pink; */}
  margin: 0 auto;
  ${'' /* padding: 5%; */}
`
const SinglePost = styled.div`
  width: 78%;
  padding-top: 3%;
`

const SinglePostContainer = styled.div`
  width: 80%;
  padding: 3%;
  background-color: white;
  ${'' /* margin: 3%; */}
  margin-left:auto;
  margin-right: auto;
`
const SinglePostTopLeft = styled.div`
  ${'' /* border: 1px solid red; */}
  ${'' /* display: flex; */}
  ${'' /* justify-content: space-between; */}
  margin-bottom: 15px;
  display: flex;
`
const SinglePostTopImg = styled.div`
  border: 1px solid black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const SinglePostTopUser = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`

const SinglePostName = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: black;
  font-weight: bold;
`
const SinglePostTime = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
`

const SingleTopRight = styled.div`
  color: black;
`

const SinglePostCat = styled(Link)`
  color: #05f2f2;
  font-weight: bold;
  font-size: 14px;
`

const SinglePostTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`
const SinglePostContent = styled.div`
  font-size: 16px;
  color: black;、
  white-space:pre-wrap;
  line-height: 30px;
`
const SinglePostResponses = styled.div``

export default function SinglePostPage() {
  const [post, setPost] = useState(null)
  const { sid } = useParams()
  console.log(useParams(sid))

  useEffect(() => {
    getPost(sid).then((post) => setPost(post[0]))
  }, [sid])

  return (
    <Root>
      <SinglePost>
        <SinglePostContainer>
          <SinglePostTopLeft>
            <SinglePostTopImg></SinglePostTopImg>
            <SinglePostTopUser>
              <SinglePostName>ID:{post && post.sid}</SinglePostName>
              <SinglePostTime>
                {post && new Date(post.art_create_time).toLocaleString()}
              </SinglePostTime>
            </SinglePostTopUser>
          </SinglePostTopLeft>
          <SingleTopRight></SingleTopRight>
          <SinglePostCat>
            {post && post.for_category}
            <br />
          </SinglePostCat>
          <SinglePostTitle>{post && post.art_title}</SinglePostTitle>
          <SinglePostContent>
            {post && post.art_content.replace(/\n|\r\n/g, <br />)}
            {/* ???????? */}
          </SinglePostContent>
        </SinglePostContainer>
        <SinglePostResponses>
          <div>
            <div class="forum_responses">
              <div class="forum_responses_number">15 Responses</div>
              <div class="forum_response_area">
                <div class="forum_response_user">
                  <div class="forum_response_user_img">
                    <img src="" alt="" />
                  </div>
                  <div class="forum_response_user_name_time">
                    <div class="forum_user_name">@amandachius</div>
                    <div class="forum_post_time">12 November 2020 19:35</div>
                  </div>
                </div>
                <div class="forum_response_message_area">
                  <div class="forum_message">收到收到！！！</div>
                  <div class="forum_likes_icon">
                    <i class="fa-solid fa-heart">
                      <a href="#"></a>
                    </i>
                    33
                  </div>
                </div>
              </div>
              <div class="forum_response_area">
                <div class="forum_response_user">
                  <div class="forum_response_user_img">
                    <img src="" alt="" />
                  </div>
                  <div class="forum_response_user_name_time">
                    <div class="forum_user_name">@amandachius</div>
                    <div class="forum_post_time">12 November 2020 19:35</div>
                  </div>
                </div>
                <div class="forum_response_message_area">
                  <div class="forum_message">收到收到！！！</div>
                  <div class="forum_likes_icon">
                    <i class="fa-solid fa-heart">
                      <a href="#/"></a>
                    </i>
                    33
                  </div>
                </div>
              </div>
            </div>
            <div class="forum_response_here">
              <div class="forum_response_block">
                <form action="">
                  <input type="text" placeholder="response here" />
                  <div class="forum_button_group">
                    <button>Cancel</button>
                    <button>
                      <i class="fa-thin fa-paper-plane-top"></i>Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </SinglePostResponses>
      </SinglePost>
    </Root>
  )
}
