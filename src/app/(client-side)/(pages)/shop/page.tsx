import React from 'react'
import Products from './components/Products';
import MaxWidthWrapper from '@/components/contentwrapper/maxWidthWrapper'
import Link from 'next/link'
import { IoHomeOutline } from "react-icons/io5";
import ProductFilter from './components/ProductFilter';
import Pagination from './components/Pagination';

const ShopPage = ({searchParams}:any) => {
  return (
      <MaxWidthWrapper>
        <div className='flex flex-col gap-4 mt-[20px]'>
          <div className='bg-white flex justify-between items-center  px-[10px] py-[5px] rounded-xl'>
          <div className='flex text-[14px] gap-2'>
                <Link href='/' className='hover:opacity-50 color-[gray] font-light flex items-center gap-1'>
                  <IoHomeOutline className='color-[gray]'/>
                  home
                </Link>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row justify-between gap-5 w-full'>

            <div className='bg-white py-[10px] rounded-xl flex-1 px-[10px]'>
              <ProductFilter />
            </div>
            <div className='flex flex-col gap-[32px] flex-[3]'> 
              <div className='bg-white py-[10px] rounded-xl '>
                <Products {...searchParams}/>
              </div>
     
                <Pagination {...searchParams}/>
              
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
  )
}

export default ShopPage