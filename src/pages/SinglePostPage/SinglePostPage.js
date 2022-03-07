import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
// import { getPost } from '../../data/WebApi'
import { getPost, getResponse } from '../../data/WebApi'
import './SinglePostPage.css'
import ForumNav from './../../components/Forum-Nav'
// import PropTypes from 'prop-types'

// import ForumNav from '../../components/Forum-Nav'

const Root = styled.div`
  width: 100%;
  ${'' /* border: 1px solid pink; */}
  margin: 0 auto;
  ${'' /* padding: 5%; */}
`
const SinglePost = styled.div`
  width: 63%;
  padding-top: 1%;
`
const AllDisplayFlex = styled.div`
  display: flex;
`

const SinglePostContainer = styled.div`
  width: 95%;
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
  const [response, setResponse] = useState(null)
  const [value, setValue] = useState()
  const [messages, setMessage] = useState(null)
  const { sid } = useParams()
  console.log(useParams(sid))

  function SinglePostResponsesArea({ name, res_content, res_time }) {
    return (
      <div class="forum_response_area">
        <div class="forum_response_user">
          <div class="forum_response_user_img">
            <img src="" alt="" />
          </div>
          <div class="forum_response_user_name_time">
            <div class="forum_user_name">@{name}</div>
            <div class="forum_post_time">{res_time}</div>
          </div>
        </div>
        <div class="forum_response_message_area">
          <div class="forum_message">{res_content}</div>
          <div class="forum_likes_icon">
            <i class="fa-solid fa-heart">{/* <a href="#"></a> */}</i>
            33
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    getPost(sid).then((post) => setPost(post))
    getResponse(sid).then((response) => setResponse(response))
  }, [])

  const fetchMessage = () => {
    return fetch(`http://localhost:3000/forum_index/res-list/${sid}`)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data)
      })
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleFormSubmit = (e) => {
    // e.preventDefault()
    fetch(`http://localhost:3000/forum_index/res-list/${sid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        res_content: value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setValue('')
        fetchMessage()
      })
  }

  useEffect(() => {
    // fetchMessage()
  })

  return (
    <Root>
      <AllDisplayFlex>
        <ForumNav />
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

                {response &&
                  response.map((v, i) => {
                    return (
                      <SinglePostResponsesArea
                        key={v.res_art_sid}
                        name={v.name}
                        res_time={new Date(v.res_time).toLocaleString()}
                        res_content={v.res_content}
                      ></SinglePostResponsesArea>
                    )
                  })}
              </div>
              <div class="forum_response_here">
                <div class="forum_response_block">
                  <form action="" onSubmit={handleFormSubmit}>
                    <input
                      type="text"
                      placeholder="response here"
                      value={value}
                      onChange={handleInputChange}
                      // onFocus={handleInputFocus}
                    />
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
