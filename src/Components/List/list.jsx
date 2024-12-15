import React, { useState } from 'react';
import { RiAddLargeLine } from "react-icons/ri";
import { TiMinus } from "react-icons/ti";
import { TiDelete } from "react-icons/ti";
import Input from '../Input/input';

const List = () => {
  const [list, setList] = useState([]);

  const incrementAbsent = (index) => {
    const updatedIncrementList = [...list];
    updatedIncrementList[index].initialAbsent += 1;
    if (updatedIncrementList[index].initialAbsent >= updatedIncrementList[index].maxAbsent) {
      updatedIncrementList[index].initialAbsent = updatedIncrementList[index].maxAbsent;
    }
    setList(updatedIncrementList);
  };

  const decrementAbsent = (index) => {
    const updatedDecrementList = [...list];
    updatedDecrementList[index].initialAbsent -= 1;
    if (updatedDecrementList[index].initialAbsent < 0) {
      updatedDecrementList[index].initialAbsent = 0;
    }
    setList(updatedDecrementList);
  };

  const addItem = (items) => {
    setList([...list, items]);
  };

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const getItemColor = (initialAbsent, maxAbsent) => {
    const percentage = (initialAbsent / maxAbsent) * 100;
    if (percentage === 100) return 'bg-red-500'; 
    if (percentage >= 75) return 'bg-orange-400'; 
    if (percentage >= 50) return 'bg-yellow-400';
    return 'bg-[#13131b]'; 
  };

  const checkForData = () => {
    if (list.length === 0) {
      return <h1 className="text-white text-lg font-light select-none">No data</h1>;
    } else {
      return list.map((items, index) => (
        <div
          key={index}
          className={`relative group flex h-11 mb-4 items-center justify-between px-[10%] transition-all duration-500 ease-in rounded-xl ${getItemColor(
            items.initialAbsent,
            items.maxAbsent
          )}`}
        >
          {/* Delete Button */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-1 rounded-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 transition-all duration-300"
            onClick={() => handleDelete(index)}
          >
            <h1 className="text-[25px] cursor-pointer">
              <TiDelete />
            </h1>
          </button>

          {/* Minus Button */}
          <p className="text-[#674EA9] cursor-pointer">
            <TiMinus onClick={() => decrementAbsent(index)} />
          </p>

          {/* Subject and Absence Info */}
          <h1 className="text-1xl text-[#eedefd] select-none">
            {items.subject} - Absent: {items.initialAbsent}/{items.maxAbsent}
          </h1>

          {/* Add Button */}
          <p className="text-[#674EA9] cursor-pointer">
            <RiAddLargeLine onClick={() => incrementAbsent(index)} />
          </p>
        </div>
      ));
    }
  };

  return (
    <div className="relative w-full mt-10">
      <div className="mb-14 mt-14">
        <Input onAddItem={addItem} items={list} />
      </div>
      <div className="mb-6">
        <h1 className="text-[rgb(241,240,242)] text-4xl font-sans select-none">List of Absences</h1>
      </div>
      <div className="w-full">
        <div>{checkForData()}</div>
      </div>
    </div>
  );
};

export default List;

