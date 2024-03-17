import Image from 'next/image';
import React from 'react'
import { BsCartPlus } from "react-icons/bs";
import image1 from '../../../public/accet1.png'

const ShopingCard = () => {
  return (
    <div className='whiteBoxShadow md:h-[302px] max-h-[320px] p-[10px] gap-3 flex flex-col justify-between items-center  rounded-md '>
        <div className='smd:min-h-[150px] md:min-h-[200px] min-h-[200px] smd:max-h-[180px]  md:max-h-[220px]  w-full rounded-md overflow-hidden'>
            <Image className='object-cover w-full'  width={350} height={350} alt='1' src={image1}/> 
        </div>

        <div className='w-full h-full flex flex-col gap-2 justify-between'>
            <div className='w-full h-max text-[15px] font-medium'>Product title</div>
            <div className='w-full  items-center flex h-max justify-between'>
                <div className='font-bold text-[15px]'>45$</div>
                <button className='outline-none text-white px-[5px] py-[10px] rounded-lg flex gap-2 items-center bg-color2'>
                    <span className='text-[13px] capitalize'>add to cart</span>
                    <BsCartPlus />
                </button>
            </div>
        </div>

    </div>
  )
}

export default ShopingCard;