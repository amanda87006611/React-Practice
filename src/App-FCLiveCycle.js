import React, { useState, useEffect } from 'react'
import FCLifeCycle from './0221/component/FCLifeCycle'

function App() {
  const [alive, setAlive] = useState(true)

  return (
    <>
      {alive && <FCLifeCycle />}
      <button
        onClick={() => {
          setAlive(!alive)
        }}
      >
        {alive ? '再見' : '出現'}
      </button>
    </>
  )
}

export default App
