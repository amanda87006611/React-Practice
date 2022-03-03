import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { getPost } from '../../data/WebApi'
import PropTypes from 'prop-types'

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
  ${'' /* border: 1px solid red; */}/
`

const PostContainer = styled.div`
  border-bottom: 1px solid rgba(225, 225, 225, 0.2);
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PostTitle = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: gray;
`

const PostDate = styled.div`
  color: rgba(225, 225, 225, 0.5);
`

function Post({ post }) {
  return (
    <PostContainer>
      <PostTitle to={`/posts/${post.id}`}>{post.art_title}</PostTitle>
      {/* Link to */}
      <PostDate>{new Date(post.art_create_time).toLocaleString()}</PostDate>
    </PostContainer>
  )
}

Post.propTypes = {
  post: PropTypes.object,
}

export default function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/forum-list-connectTry')
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
  }, [])

  return (
    <Root>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </Root>
  )
}
