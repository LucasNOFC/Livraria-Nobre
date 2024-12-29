import React from 'react'
import Product from '../components/Product/Product'
import products from '../data/products.json'
import Banner from '../components/Banner'

const ProductPage = () => {
  return (
    <div>
        <div className='flex items-center justify-center p-2 gap-5'>
            {products.map(item => {
                return(
                    <Product product={item} key={item.id}/>
                )
            })}
        </div>
    </div>
  )
}

export default ProductPage