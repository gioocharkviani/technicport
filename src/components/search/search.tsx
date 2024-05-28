'use client'
import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [active ,setActive] = useState<boolean>(false);
  const [inputValue ,setInputValue] = useState<string>('');

  useEffect(()=>{
    if(inputValue.trim() !== ''){
      setActive(true)
    } else {
      setActive(false)
    }
  },[inputValue])

  return (
    <div className='w-full flex-col flex gap-[10px]'>

        <div className='w-full flex flex-col relative gap-4 items-center'>

          <div className='w-full flex gap-4'>
            <input 
              onChange={(e)=> setInputValue(e.target.value)} 
              type='text' 
              placeholder='search' 
              className='w-full outline-none italic h-full px-[10px] bg-transparent text-[14px] pr-[10px] py-[10px] border-[2px] border-gray-300 rounded-md'
            />
            <button className='bg-color2 px-[10px] py-[12px] hover:bg-[#c19100] rounded-md text-white items-center h-full flex gap-2 text-[12px]'>
              <span>ძიება</span>
              <IoSearch className='text-[white]' />
            </button>
          </div>

          {active &&
            <div className='w-full py-[20px] max-h-[250px] overflow-y-auto px-[10px] z-[99] flex justify-center items-center  absolute top-[60px] rounded-lg whiteBoxShadow'>
              loading....
              <div className='w-full h-[400px]'></div>
            </div>
          }

        </div>
    </div>
  )
}

export default Search;
