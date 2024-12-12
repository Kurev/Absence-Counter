import React from 'react'
import { MdLightMode } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { FaPenAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className='flex w-full justify-between items-center pt-3'>
      <div className='cursor-pointer'><h1 className='text-2xl text-white'><MdLightMode /></h1></div>
      <div className='flex justify-center items-center'>
        <h1 className='text-xl font-normal text-[rgb(88,66,149)]'><FaPenAlt /></h1>
        <h1 className='text-xl font-light text-[rgb(189,188,190)]'>Absence Counter</h1
      ></div>
      <div className='cursor-pointer'><h1 className='text-2xl text-white'><CiLogin /></h1></div>
    </nav>
  )
}

export default Navbar