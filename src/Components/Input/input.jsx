import React from 'react'

const Input = () => {
  return (
    <div className='flex w-[100] h-[100] flex-col items-center justify-center pt-7'>
      <input placeholder='Subject' className='pl-3 bg-[#13131b] w-[40%] h-[3rem] rounded-lg text-white mb-4'></input>
      <input placeholder='Maximum Absent' className='pl-3 bg-[#13131b] w-[40%] h-[3rem] rounded-lg text-white'></input>
    </div>
  )
}

export default Input