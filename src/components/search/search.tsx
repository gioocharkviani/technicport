import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='w-full h-[50px] pr-[10px] items-center border-[2px] border-gray-300 rounded-md flex gap-[10px]'>
        <input type='text' placeholder='search' className='w-full outline-none italic h-full px-[10px] bg-transparent text-[14px]'/>
        <button className='w-[30px] h-[30px] flex-shrink-0 rounded-[50%] bg-[#FBBC05] flex items-center justify-center'>
            <IoSearch className='text-[white]' />
        </button>
    </div>
  )
}

export default Search