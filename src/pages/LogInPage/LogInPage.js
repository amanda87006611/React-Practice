import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { logIn } from '../../data/WebApi'

const ErrorMessage = styled.div`
  color: red;
`

export default function LogInPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()

  const handleSubmit = (e) => {
    setErrorMessage(null)
    // e.preventDefault()
    logIn(username, password).then((data) => {
      if (data.ok === 0) {
        setErrorMessage(data.message)
      }
      const token = data.token
      localStorage.setItem('token', token)
      // 拿到&設定token
      history.push('/')
      // useHistory()-> 回到首頁的路由
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Username:{' '}
        <input
          value={username}
          onChange={(e) => {
            return setUsername(e.target.value)
          }}
        />
      </div>
      <div>
        Password:{' '}
        <input
          type="password"
          value={password}
          onChange={(e) => {
            return setPassword(e.target.value)
          }}
        />
      </div>
      <button>LogIn</button>{' '}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </form>
  )
}
