import React from 'react'
import '../styles/index.css'

const Header = () => {
  return (
    <div className='inline-flex bg-black w-full'>
        <div className='flex items-center w-full md:justify-between justify-center gap-3 p-3.5 text-gray-400 shadow shadow-black'>
            <h1 className='text-white'>LIVRARIA NOBRE</h1>
            <div>
              <ol className='md:flex hidden gap-10'>
                <li className='pr-2 pl-2'>LIVROS</li>
                <li className='pr-2 pl-2'>MANGÁ</li>
                <li className='pr-2 pl-2'>SOBRE NÓS</li>
              </ol>
            </div>
            <img src="../../public/images/user.svg" className='size-8 ' alt="LOGIN"/>
        </div>
    </div>
  )
}

export default Header