import React from 'react';
import { MdLightMode } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { FaPenAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='relative z-10 flex w-full justify-between items-center pt-3 select-none'>
      <div className='cursor-pointer'>
        <h1 className='text-2xl text-white'><MdLightMode /></h1>
      </div>
      <div className='flex justify-center items-center'>
        <h1 className='text-xl font-normal text-[#584295] mr-2'><FaPenAlt /></h1>
        <h1 className='text-xl font-light text-[#bdbcbe]'>Absence Counter</h1>
      </div>
      <div className='cursor-pointer'>
        <h1 className='text-2xl text-white'><CiLogin /></h1>
      </div>
    </nav>
  );
};

export default Navbar;
