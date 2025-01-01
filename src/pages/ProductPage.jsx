import React from 'react'
import Product from '../components/Product/Product'
import products from '../data/products.json'
import Banner from '../components/Banner'
import SideMenu from '../components/SideMenur/SideMenu'

const ProductPage = () => {
  return (
    <div>
        <div className='flex items-center justify-between gap-5 w-full p-5 h-screen flex-wrap'>
          <SideMenu/>
            <div className='grid grid-rows-2 grid-flow-col gap-4 '>
              {products.map(item => {
                  return(
                      <Product product={item} key={item.id}/>
                  )
              })}
            </div>
        </div>
    </div>
  )
}

export default ProductPage