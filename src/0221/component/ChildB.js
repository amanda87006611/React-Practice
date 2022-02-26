import { useState } from 'react'

function ChildB(props) {
  const [childBData, setChildBData] = useState('childBData')
  return (
    <>
      <h2>ChildB</h2>
      <botton
        onClick={() => {
          props.setData(childBData)
        }}
      ></botton>
    </>
  )
}
export default ChildB
