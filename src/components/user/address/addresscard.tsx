import React from 'react'
import { MdEditNote } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";


const Addresscard = ({data}:{data:any}) => {
  return (
    <div className='w-max min-w-full rounded-lg px-[20px] py-[10px] flex justify-between gap-5 whiteBoxShadow'>
        <div className='flex  w-max flex-col gap-1'>
            <span className='text-[12px] text-[gray]'>city:</span>
            <span className='text-[14px] text-[#404040]'>{data?.city}</span>
        </div>
        <div className='flex w-max flex-col gap-1'>
            <span className='text-[12px] text-[gray]'>address:</span>
            <span className='text-[14px] text-[#404040]'>{data.address}</span>
        </div>
        <div className='flex w-max flex-col gap-1'>
            <span className='text-[12px] text-[gray]'>phone:</span>
            <span className='text-[14px] text-[#404040]'>{data.phone}</span>
        </div>
        <div className='flex w-max flex-col gap-1'>
            <span className='text-[12px] text-[gray]'>zip:</span>
            <span className='text-[14px] text-[#404040]'>{data.zip}</span>
        </div>
        <div className='flex gap-3'>
        <button title='რედაქტირება' className='w-max min-h-full flex px-[14px] rounded-md text-[white] items-center bg-color2'>
                <MdEditNote className='text-[18px]'/>
        </button>
        <button title='წაშლა' className='w-max min-h-full flex px-[14px] rounded-md text-[white] items-center bg-[#c12d2d]'>
                <AiOutlineDelete className='text-[18px]'/>
        </button>
        </div>
    </div>
  )
}

export default Addresscard