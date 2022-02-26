import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Api = 'https://student-json-api.lidemy.me/comments?_sort=id&_order=DESC'

const Page = styled.div`
  width: 400px;
  margin: 0 auto;
  ${'' /* border: 1px solid red; */}
  ${'' /* text-align: center; */}
`
const Title = styled.h1`
  color: #333;
`
const MessageForm = styled.form`
  margin-top: 16px;
`

const MessageTextArea = styled.textarea`
  width: 100%;
  display: block;
`

const SubmitButton = styled.button`
  margin-top: 8px;
`

const MessageList = styled.div`
  margin-top: 16px;
`
const MessageContainer = styled.div`
  border: 1px solid black;
  padding: 8px 16px;
  border-radius: 8px;

  & + & {
    margin-top: 8px;
  }
`
const MessageHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 4px;
  margin-bottom: 8px;
`
const MessageAuthor = styled.div`
  color: rgba(25, 75, 55, 0.3);
  font-size: 14px;
`
const Messagetime = styled.div``

const MessageBody = styled.div`
  font-size: 16px;
  margin-top: 8px;
`

const ErrorMessage = styled.div`
  color: blue;
`

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Message({ author, time, children }) {
  return (
    <MessageContainer>
      <MessageHead>
        <MessageAuthor>{author}</MessageAuthor>
        <Messagetime>{time}</Messagetime>
      </MessageHead>
      <MessageBody>{children}</MessageBody>
    </MessageContainer>
  )
}

function App() {
  const [messages, setMessage] = useState(null)
  const [apiError, setApiError] = useState(null)
  const [value, setValue] = useState()
  const [PostMessageError, setPostMessageError] = useState()
  const [isLoadingPostMessage, setIsLoadingPostMessage] = useState(false)
  // 是否在送出留言的state

  const fetchMessage = () => {
    return fetch(Api)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data)
      })
      .catch((err) => {
        setApiError(err.message())
      })
  }

  const handleTextAreaChanges = (e) => {
    setValue(e.target.value)
  }

  const handleTextAreaFocus = (e) => {
    setPostMessageError(null)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (isLoadingPostMessage) {
      return
    }
    setIsLoadingPostMessage(true)
    fetch('https://student-json-api.lidemy.me/comments?_sort=id&_order=DESC', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nickname: 'Amanda',
        body: value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoadingPostMessage(false)
        if (!data.ok) {
          setPostMessageError(data.message)
          // 如果不能夠好好送出，回傳error的訊息
        }
        setValue('')
        // 送出留言 ---->變成空字串
        fetchMessage()
      })
      .catch((err) => {
        setIsLoadingPostMessage(false)
      })
  }

  useEffect(() => {
    fetchMessage()
  }, [])

  return (
    <Page>
      {isLoadingPostMessage && <Loading>Loading...</Loading>}
      <Title>留言板</Title>
      <MessageForm onSubmit={handleFormSubmit}>
      {/* onsubmit的觸發 要寫在form上面 */}
        <MessageTextArea
          rows={10}
          value={value}
          onChange={handleTextAreaChanges}
          onFocus={handleTextAreaFocus}
          // 出現錯誤訊息時，再focus回textArea，錯誤訊息會自動消失！！
        />
        <SubmitButton>送出留言</SubmitButton>
        {PostMessageError && <ErrorMessage>{PostMessageError}</ErrorMessage>}
      </MessageForm>
      {messages && messages.length === 0 && <div>No Messages</div>}
      {/* 錯誤處理(如果沒有message的話～) */}
      <MessageList>
        {messages &&
          messages.map((v, i) => {
            return (
              <Message
                key={v.id}
                author={v.nickname}
                time={new Date(v.createdAt).toLocaleString()}
                // 把時間轉成看得懂的格式。
              >
                {v.body}
              </Message>
            )
          })}
      </MessageList>
    </Page>
  )
}

export default App
