import React from 'react'
import { RiAddLargeLine } from "react-icons/ri";
import { TiMinus } from "react-icons/ti";


const List = () => {
  return (
    <div>
        <div className='mt-10 mb-6'>
            <h1 className='text-[rgb(241,240,242)] text-4xl font-sans'>List of Absences</h1>
        </div>
        <div className='w-full'>
        <div className="div">
            <div className='flex h-11 mb-4 items-center justify-between px-[10%] bg-[#13131b] rounded-xl'>
                <p className='text-[#674EA9]'><TiMinus /></p>
                <h1 className='text-1xl text-[#eedefd]'>Rizal Madepsker</h1>
                <p className='text-[#674EA9]' ><RiAddLargeLine /></p>
            </div>
            <div className='flex h-11 mb-4 items-center justify-between px-[10%] bg-[#13131b] rounded-xl'>
                <p className='text-[#674EA9]'><TiMinus /></p>
                <h1 className='text-1xl text-[#eedefd]'>Ethics Animalasa</h1>
                <p className='text-[#674EA9]'><RiAddLargeLine /></p>
            </div>
            <div className='flex h-11 mb-4 items-center justify-between px-[10%] bg-[#13131b] rounded-xl'>
                <p className='text-[#674EA9]'><TiMinus /></p>
                <h1 className='text-1xl text-[#eedefd]'>ITC Aviola Idol </h1>
                <p className='text-[#674EA9]'><RiAddLargeLine /></p>
            </div>
            <div className='flex h-11 mb-4 items-center justify-between px-[10%] bg-[#13131b] rounded-xl'>
                <p className='text-[#674EA9]'><TiMinus /></p>
                <h1 className='text-1xl text-[#eedefd]'>Good Governance</h1>
                <p className='text-[#674EA9]'><RiAddLargeLine /></p>
            </div>
            <div className='flex h-11 mb-4 items-center justify-between px-[10%] bg-[#13131b] rounded-xl'>
                <p className='text-[#674EA9]'><TiMinus /></p>
                <h1 className='text-1xl text-[#eedefd]'>MMW Animalasa</h1>
                <p className='text-[#674EA9]'><RiAddLargeLine /></p>
            </div> 
            
        </div>
        
        </div>
    </div>
    
  )
}

export default List