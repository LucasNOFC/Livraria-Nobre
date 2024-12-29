import React from 'react'
import '../styles/index.css'
import ExclusiveProduct from '../components/ExclusiveProduct'
import Banner from '../components/Banner'

const ExclusivePage = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-5'>
        <Banner/>
            <div className='flex flex-col gap-10 p-5'>
            <div>
              <ExclusiveProduct/>
            </div>
          </div>
    </div>
  )
}

export default ExclusivePage