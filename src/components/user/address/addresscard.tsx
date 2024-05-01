import React from 'react'
import { MdEditNote } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";


const Addresscard = () => {
  return (
    <div className='w-max min-w-full rounded-lg px-[20px] py-[10px] flex justify-between gap-5 whiteBoxShadow'>
        <div className='flex flex-col gap-1'>
            <span className='text-[12px] text-[gray]'>city:</span>
            <span className='text-[14px] text-[#404040]'>some city</span>
        </div>
        <div className='flex flex-col gap-1'>
            <span className='text-[12px] text-[gray]'>address:</span>
            <span className='text-[14px] text-[#404040]'>janjgava 38</span>
        </div>
        <div className='flex flex-col gap-1'>
            <span className='text-[12px] text-[gray]'>phone:</span>
            <span className='text-[14px] text-[#404040]'>598550076</span>
        </div>
        <div className='flex flex-col gap-1'>
            <span className='text-[12px] text-[gray]'>zip:</span>
            <span className='text-[14px] text-[#404040]'>4323</span>
        </div>
        <button className='w-max min-h-full flex px-[14px] rounded-md text-[white] items-center bg-color2'>
                <MdEditNote className='text-[18px]'/>
        </button>
        <button className='w-max min-h-full flex px-[14px] rounded-md text-[white] items-center bg-[#c12d2d]'>
                <AiOutlineDelete className='text-[18px]'/>
        </button>
    </div>
  )
}

export default Addresscard