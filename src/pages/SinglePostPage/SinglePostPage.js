import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
// import { getPost } from '../../data/WebApi'
import { getPost } from '../../data/WebApi'
// import PropTypes from 'prop-types'

const Root = styled.div`
  width: 80%;
  border: 1px solid black;
  margin: 0 auto;
`
const SinglePost = styled.div``

const SinglePostContainer = styled.div`
  border: 1px solid black;
`
const SinglePostTop = styled.div`
  ${'' /* border: 1px solid red; */}
  display: flex;
  justify-content: space-between;
`
const SinglePostName = styled.div`
  font-weight: bold;
  font-size: 12px;
`
const SinglePostTime = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`
const SinglePostTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`
const SinglePostContent = styled.div`
  font-size: 16px;
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
