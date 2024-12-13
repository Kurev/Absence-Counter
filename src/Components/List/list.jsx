import React, { useState } from 'react';
import { RiAddLargeLine } from "react-icons/ri";
import { TiMinus } from "react-icons/ti";
import Input from '../Input/input';

const List = () => {

  const [list, setList] = useState([]);

  const addItem = (items) => {
    setList([...list, items])
  };

  const checkForData = () => {
    if (list.length === 0) {
      return <h1 className='text-white text-lg font-light'>No data</h1>;
    } else {
      return list.map((items, index) => (
        <div key={index} className='flex h-11 mb-4 items-center justify-between px-[10%] bg-[#13131b] rounded-xl'>
          <p className='text-[#674EA9] cursor-pointer'>
            <TiMinus />
          </p>
          <h1 className='text-1xl text-[#eedefd]'>{items.subject} - Absent: {items.maxAbsent}</h1>
          <p className='text-[#674EA9] cursor-pointer'>
            <RiAddLargeLine />
          </p>
        </div>
      ));
    }
  };

  return (
    <div className='relative w-full mt-10'>
      <div className='mb-14 mt-14'>
        <Input onAddItem={addItem} />
      </div>
      <div className='mb-6'>
        <h1 className='text-[rgb(241,240,242)] text-4xl font-sans'>List of Absences</h1>
      </div>
      <div className='w-full'>
        <div>
          {checkForData()}
        </div>
      </div>
    </div>
  );
};

export default List;
