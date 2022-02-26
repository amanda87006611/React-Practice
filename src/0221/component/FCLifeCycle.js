import { useEffect, useState, useRef } from 'react'

function FCLifeCycle(props) {
  const [total, setTotal] = useState(0)
  const [didMount, setdidMount] = useState(false)
  const didMountRef = useRef(false)

  // didMount
  useEffect(() => {
    console.log('didMount')
  }, [])

  // didUpdate + didMount
  useEffect(() => {
    console.log('didMount + didUpdate')
  }, [total])

  // willUnmount
  useEffect(() => {
    return () => {
      console.log('willUnmount')
    }
  }, [])

  useEffect(() => {
    if (didMount) {
      console.log('didUpdate')
    }
  }, [total])


  useEffect(() => {
    if (didMountRef.current) {
      console.log('didUpdate')
    } else {
      didMountRef.current = true
    }
  }, [total])

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          const newTotal = total + 1
          setTotal(newTotal)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          const newTotal = total - 1
          setTotal(newTotal)
        }}
      >
        -1
      </button>
    </>
  )
}

export default FCLifeCycle
