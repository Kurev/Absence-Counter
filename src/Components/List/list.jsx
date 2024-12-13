import React from 'react';
import { RiAddLargeLine } from "react-icons/ri";
import { TiMinus } from "react-icons/ti";

const List = () => {
  return (
    <div className='relative w-full mt-10'>
      <div className='mb-6'>
        <h1 className='text-[rgb(241,240,242)] text-4xl font-sans'>List of Absences</h1>
      </div>
      <div className='w-full'>
        <div>
          {[
            "Rizal Madepsker",
            "Ethics Animalasa",
            "ITC Aviola Idol",
            "Good Governance",
            "MMW Animalasa",
            "STS EZ",
            "Defcal ywa ",
            
          ].map((name, index) => (
            <div
              key={index}
              className='flex h-11 mb-4 items-center justify-between px-[10%] bg-[#13131b] rounded-xl'
            >
              <p className='text-[#674EA9] cursor-pointer'>
                <TiMinus />
              </p>
              <h1 className='text-1xl text-[#eedefd]'>{name}</h1>
              <p className='text-[#674EA9] cursor-pointer'>
                <RiAddLargeLine />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
