'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaSearch } from "react-icons/fa";
import SelectFilter from './SelectFilter';

const ProductFilter = () => {
    const {push} = useRouter();
    
  return (
    <div className='flex p-[12px] flex-col gap-[20px]'>

          <div className='w-full gap-2 items-center h-[40px] flex justify-between'>
            <input type='text' className='input1 w-full' placeholder='ძებნა...'/>
            <button className='w-[40px] h-[40px] rounded-md flex justify-center items-center shrink-0 bg-color2 hover:bg-[#f9a94e]'><FaSearch className='text-[white] font-bold' /></button>
          </div>

          <div className='w-full'>
            <SelectFilter />
          </div>
          <div className='w-full'>
            <SelectFilter />
          </div>

    </div>
  )
}

export default ProductFilter