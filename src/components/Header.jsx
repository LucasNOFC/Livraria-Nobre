import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/index.css'

const Header = () => {
  return (
    <div className='inline-flex bg-black w-full'>
        <div className='flex items-center w-full md:justify-between justify-center gap-3 p-3.5 text-white shadow shadow-black'>
            <h1 className='text-white hover:text-gray-400'><Link to={"/"}>LIVRARIA NOBRE</Link></h1>
            <div className>
              <ol className='md:flex hidden gap-10'>
                <li className='pr-2 pl-2  hover:text-gray-400'><Link to={"/products"}>LIVROS</Link></li>
                <li className='pr-2 pl-2  hover:text-gray-400'><Link to={"/products"}>MANGÁ</Link></li>
                <li className='pr-2 pl-2  hover:text-gray-400'><Link to={"/exclusive-products"}>EXCLUSIVOS</Link></li>
                <li className='pr-2 pl-2  hover:text-gray-400'><Link to={"/about"}>SOBRE NÓS</Link></li>
              </ol>
            </div>
            <img src="../../public/images/user.svg" className='size-8 ' alt="LOGIN"/>
        </div>
    </div>
  )
}

export default Header