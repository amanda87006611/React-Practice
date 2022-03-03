import React from 'react'
import { data } from './../data_practice/product'
import { Link } from 'react-router-dom'

function ProductList(props) {
  return (
    <>
      <h1>ProductList</h1>
      <ul>
        {data.map((v, i) => {
          return (
            <li key={i}>
              <Link to={'/product-detail/' + v.id}>
                {v.name} / {v.price}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProductList
