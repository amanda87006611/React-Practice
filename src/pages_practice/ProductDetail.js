import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { data } from './../data_practice/product'

function ProductDetail(props) {
  const { id } = useParams()

  const product = data.find((v, i) => v.id === id)

  return (
    <>
      <h1>ProductDetail</h1>
      {product && (
        <h2>
          {product.name} / {product.price}
        </h2>
      )}
      <Link to="/product-list">回清單首頁</Link>
    </>
  )
}
export default ProductDetail
