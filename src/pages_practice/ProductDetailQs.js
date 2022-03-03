import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { data } from '../data_practice/product'

function ProductDetailQs(props) {
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')

  const product = data.find((v, i) => {
    return v.id === id
  })

  return (
    <>
      <h1>ProductDetail - Query String</h1>
      {/* 有找到資料才會呈現 */}
      {product && (
        <>
          <h2>{product.name}</h2>
          <img src={product.picture} alt="" />
          <p>{product.price}</p>
          <p>{product.tags}</p>
        </>
      )}
      <Link to="/product-list-qs">回產品清單</Link>
    </>
  )
}
export default ProductDetailQs
