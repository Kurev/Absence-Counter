import React, { useState } from 'react';
import { FaPenAlt } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

const Input = () => {
  const [open, setOpen] = useState(false);

  const handleToggleDialog = () => {
    setOpen(true);
  }

  const handleCloseDialog = () => {
    setOpen(false);
  }

  return (
    <div className='relative w-full flex flex-col items-center mt-10'>
      <button 
        onClick={handleToggleDialog} 
        className='py-2 px-[7%] rounded-md bg-[#584295] text-[#bdbcbe] hover:bg-[#58429582] duration-[0.5s]'
      >
        Add For The List
      </button>

      {open && (
        <div className='fixed inset-0 backdrop-blur-md bg-[#00000061] z-50'>
          <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-[20rem] h-[20rem] bg-[#2d2d4a59] backdrop-blur-lg p-10 rounded-lg'>
              <div className='w-full mt-[-1.5rem] ml-[1.3rem] flex justify-end'>
                <h1 onClick={handleCloseDialog} className='text-[#584295] text-xl cursor-pointer'><FaWindowClose /></h1>
              </div>
              <div className='flex justify-center items-center mb-4'>
                <h1 className='text-xl font-normal text-[#584295] mr-2'><FaPenAlt /></h1>
                <h1 className='text-xl font-semibold text-[#bdbcbe]'>Absence Counter</h1>
              </div>
              <input 
                placeholder='Subject' 
                className='pl-3 bg-[#0a0a0f] w-full h-[3rem] rounded-lg text-white mb-4' 
              />
              <input 
                placeholder='Maximum Absent' 
                className='pl-3 bg-[#0a0a0f] w-full h-[3rem] rounded-lg text-white' 
              />
              <div className='w-full h-32 flex justify-center items-center'>
                <button className='px-[6rem] p-3 bg-[#584295] rounded-[25px] text-white'>Sumbit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
