import { useEffect, useRef } from 'react'
import $ from 'jquery'

function JqueryTestRefs(props) {
  const titleRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    console.log($(titleRef.current).text())

    $(buttonRef.current).on('click', () => {
      alert('Hello' + $(titleRef.current).text())
    })
  }, [])

  return (
    <>
      <h1 ref={titleRef}>React</h1>
      <button ref={buttonRef}>Click</button>
    </>
  )
}

export default JqueryTestRefs
