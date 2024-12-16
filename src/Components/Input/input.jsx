import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaPenAlt } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";


const Input = ({ onAddItem, items, isLightMode }) => {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [maxAbsent, setMaxSubject] = useState("");
  const [initialAbsent, setInitialAbsent] = useState(0);
  const [popError, setPopError] = useState(false); 

  const handleToggleDialog = () => {
    setOpen(true);
    setPopError(false);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSubject("");
    setMaxSubject("");
    setPopError(false); 
  };

  const handleSubmit = () => {
    const subjectExist = items.some((item) => item.subject.toLowerCase() === subject.toLowerCase());

    if (subjectExist) {
      setPopError(true);
      return;
    }
    if (subject.trim() && maxAbsent.trim()) {
      onAddItem({ subject, maxAbsent, initialAbsent });
      handleCloseDialog();
    } else {
      setPopError(true); 
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center mt-10">
      <button
        onClick={handleToggleDialog}
        className={`py-2 px-[7%] rounded-md duration-[0.5s] select-none
          ${isLightMode ? 'bg-[#6a39f3] text-[#ffffff] hover:bg-[#6b39f3a5]' : 'bg-[#7153c3] text-[#ffffff] hover:bg-[#6f53bb82]'}
          `}
      >
        Add For The List
      </button>

      {open && (
        <div className="fixed inset-0 backdrop-blur-md bg-[#00000061] z-50">
          {popError && (
            <motion.div
            initial={{ y: -50, opacity: 0 }} // sugod sa animation
            animate={{ y: 0, opacity: 1 }}   // animation kung asa siya mag end
            exit={{ y: -50, opacity: 0 }}    // dnani need pero why not coconot
            transition={{ duration: 0.5 }}   // duration
            className="absolute top-10 w-full flex justify-center mt-4"
          >
            <h1 className="text-white bg-red-500 px-4 py-2 rounded-md shadow-lg">
              ERROR: Subject already exists or fields are empty!
            </h1>
          </motion.div>
          )}
          <div className="w-full h-screen flex items-center justify-center">
            <div className="w-[20rem] h-[20rem] bg-[#2d2d4a59] backdrop-blur-lg p-10 rounded-lg">
              <div className="w-full mt-[-1.5rem] ml-[1.3rem] flex justify-end">
                <h1
                  onClick={handleCloseDialog}
                  className="text-[#584295] text-xl cursor-pointer"
                >
                  <FaWindowClose />
                </h1>
              </div>
              <div className="flex justify-center items-center mb-4">
                <h1 className="text-xl font-normal text-[#584295] mr-2">
                  <FaPenAlt />
                </h1>
                <h1 className="text-xl font-semibold text-[#bdbcbe]">
                  Absence Counter
                </h1>
              </div>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="pl-3 bg-[#0a0a0f] w-full h-[3rem] rounded-lg text-white mb-4"
              />
              <input
                type="number"
                value={maxAbsent}
                onChange={(e) => setMaxSubject(e.target.value)}
                placeholder="Maximum Absent"
                className="pl-3 bg-[#0a0a0f] w-full h-[3rem] rounded-lg text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <div className="w-full h-32 flex justify-center items-center">
                <button
                  onClick={handleSubmit}
                  className="px-[6rem] p-3 bg-[#584295] rounded-[25px] text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
