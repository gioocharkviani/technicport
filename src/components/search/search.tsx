import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='w-full flex-col flex gap-[10px]'>

        {/* <div className='flex justify-between gap-4'>
          
          <select name="category" id="category"  className='px-[10px] py-[10px] rounded-md border-[1px] border-[gray] w-full text-[13px]'>
          <option value="">კატეგორია</option>
            <option value="saab">ვინტი</option>
            <option value="opel">ზეთები</option>
            <option value="audi">აალების სანთელი</option>
         </select>

          <select name="category" id="category"  className=' px-[10px] py-[10px] rounded-md border-[1px] border-[gray] w-full text-[13px]'>
            <option value="">მწარმოებელი</option>
            <option value="yamaha">yamaha</option>
            <option value="kawasaki">kawasaki</option>
         </select>

          <select name="category" disabled id="category"  className=' px-[10px] py-[10px] rounded-md border-[1px] border-[gray] w-full text-[13px]'>
            <option value="">მოდელი</option>
            <option value="მოდელი 1">მოდელი 1</option>
            <option value="მოდელი 2">მოდელი 2</option>
            <option value="მოდელი 3">მოდელი 3</option>
            <option value="მოდელი 4">მოდელი 4</option>
            <option value="მოდელი 5">მოდელი 5</option>
         </select>
         
          <select name="category" id="category"  className=' px-[10px] py-[10px] rounded-md border-[1px] border-[gray] w-full text-[13px]'>
            <option value="">წელი</option>
            <option value="2015">2015</option>
            <option value="2015">2015</option>
            <option value="2015">2015</option>
            <option value="2015">2015</option>
            <option value="2015">2015</option>
         </select>

        </div> */}

        <div className='w-full flex gap-4 items-center '>

          <input type='text' placeholder='search' className='w-full outline-none italic h-full px-[10px] bg-transparent text-[14px]  pr-[10px] py-[10px] border-[2px] border-gray-300 rounded-md'/>

          
          <button className='bg-color2 px-[10px] py-[12px] hover:bg-[#c19100] rounded-md text-white items-center h-full flex gap-2 text-[12px]'>
            <span>ძიება</span>
            <IoSearch className='text-[white]' />
          </button>

        </div>




    </div>
  )
}

export default Search