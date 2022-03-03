import React from 'react'
import { data } from '../data_practice/product'
import { Link } from 'react-router-dom'

function ProductListQs(props) {
  return (
    <>
      <h1>ProductListQS</h1>
      <ul>
        {data.map((v, i) => {
          return (
            <li key={i}>
              <Link to={`/product-detail-qs?id=${v.id}`}>{v.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProductListQs
