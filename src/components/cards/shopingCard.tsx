'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsCartPlus } from "react-icons/bs";

const ShopingCard = (data:any) => {
  
  
  return (
      <div className='bg-[#ffffff] border-[1px] border-[gray] md:min-h-[302px] max-h-[350px] p-[10px] gap-3 flex flex-col justify-between items-center  rounded-md '>

        <Link href={`/shop/product/${data.data.id}`}>
            <div className='smd:min-h-[150px] md:min-h-[200px] min-h-[200px] flex justify-center smd:max-h-[180px]  md:max-h-[220px] h-full  w-full rounded-md overflow-hidden'>
                <Image className='object-contain w-full'  width={100} height={100} alt='1' src={data.data.thumbnail || null}/> 
            </div>
        </Link>

        <div className='w-full h-full flex flex-col gap-2 justify-between'>
        <Link href={`/shop/product/${data.data.id}`}>
          <div className='w-full h-max text-[15px] font-medium'>{data.data.title_ge}</div>
        </Link>
          <div className='w-full  items-center flex h-max justify-between'>
        <Link href={`/shop/product/${data.data.id}`}>
            <div className='font-bold text-[15px]'>{data.data.price || ''}GEL</div>
         </Link>   
            <button className='outline-none relative z-[40] text-white px-[5px] py-[10px] rounded-lg flex gap-2 items-center bg-color2'>
              <span className='text-[13px] capitalize'>add to cart</span>
              <BsCartPlus />
            </button>
          </div>
        </div>

      </div>
  )
}

export default ShopingCard;
