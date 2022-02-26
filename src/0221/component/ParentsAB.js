import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent(){
    const [pData ,setPData] = useState('Parent Data')
    const [data,setData] = useState('')

    return(
        <>
            <h2>Parent</h2>
            <p></p>
        </>
    )
}
