import React, { useRef } from 'react'

function RefsForm(props) {
  const inputEl = useRef()

  return (
    <>
      <input type="text" ref={inputEl} />
      <button
        onClick={() => {
          inputEl.current.focus()
        }}
      >
        Click Me(focus)
      </button>
      <button
        onClick={() => {
          inputEl.current.blur()
        }}
      >
        Click Me(blur)
      </button>
      <button
        onClick={() => {
          console.log(inputEl.current.value)
        }}
      >
        Click Me(value)
      </button>
    </>
  )
}

export default RefsForm
