import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
// import { getPost } from '../../data/WebApi'
import { getPost } from '../../data/WebApi'
// import PropTypes from 'prop-types'

import ForumNav from '../../components/Forum-Nav'

const Root = styled.div`
  width: 80%;
  ${'' /* border: 1px solid pink; */}
  margin: 0 auto;
  ${'' /* padding: 5%; */}
`
const SinglePost = styled.div``

const SinglePostContainer = styled.div`
  ${'' /* border: 1px solid red; */}
  padding: 3%;
  background-color: white;
  border-radius: 10px;
  margin-top: 3%;
`
const SinglePostTop = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
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
const SinglePostTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`
const SinglePostContent = styled.div`
  font-size: 16px;
  color: black;
`

export default function SinglePostPage() {
  const [post, setPost] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getPost(id).then((post) => setPost(post[0]))
  }, [id])

  return (
    <Root>
      <SinglePost>
        <SinglePostContainer>
          <SinglePostTop>
            <SinglePostName>ID:{post && post.id}</SinglePostName>
            <SinglePostTime>
              {post && new Date(post.createdAt).toLocaleString()}
            </SinglePostTime>
          </SinglePostTop>
          <SinglePostTitle>{post && post.title}</SinglePostTitle>
          <SinglePostContent>{post && post.body}</SinglePostContent>
        </SinglePostContainer>
      </SinglePost>
    </Root>
  )
}
