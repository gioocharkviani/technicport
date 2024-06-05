'use client'
import MaxWidthWrapper from '@/components/contentwrapper/maxWidthWrapper'
import React from 'react'
import Link from 'next/link';
import { IoHomeOutline } from 'react-icons/io5';
import ProductSwiper from '../../components/produtSwiper/ProductSwiper';
import { useFetch } from '@/hooks/useFetch';


const CurrectProductPage = ({params}:{params: any}) => {
  const {isLoading , apiData } = useFetch({url:`/api/products/getcurrent?id=${params.id}`});
  return (
    <MaxWidthWrapper> 
        <div className='w-full flex flex-col gap-5'>

        {/* PAGE MAP */}
      <div className='bg-white flex justify-between items-center mt-[25px] px-[10px] py-[5px] rounded-xl'>
            <div className='flex text-[14px] gap-2'>
              <Link href='/' className='hover:opacity-50 color-[gray] font-light flex items-center gap-1'>
                  <IoHomeOutline className='color-[gray]'/>
                  home
              </Link>
              <span className=' color-[gray] font-light'>/</span>
              <Link href='/shop' className=' hover:opacity-50 color-[gray] font-light'>shop</Link>
            </div>
        <div>

        {isLoading && <div className='w-[200px] py-[5px] rounded-lg skeleton'></div>}

        {apiData &&
            <div className='flex text-[14px] justify-between items-center gap-2 w-full'>
              <span className=' color-[gray] font-light'>category:</span>
              <span className='font-bold'>{apiData.category}</span>
            </div>
        }
            </div>
        </div>
        {/* PAGE MAP */}

        <div className='flex justify-between gap-4'>


        {/* PRODUCT MAIN INFO */}
        <div className='w-full h-full  bg-white p-[20px] rounded-xl'>

  
        <div className='flex w-full md:flex-row flex-col gap-7 md:gap-5 justify-between'>
          {isLoading && <div className='flex-[1] h-[300px] skeleton'></div>}
          {apiData &&
                <ProductSwiper images={apiData?.images} tumb={apiData?.tumbnail}/>
          }
            <div className='lg:flex-[1.5] flex-[2] flex flex-col  gap-4'>
              <div className='flex-col flex md:flex-row  gap-2 md:gap-5 w-full justify-between'>
                
                {isLoading &&<div className='w-[70%] py-[10px] rounded-lg skeleton'></div>}
                {apiData &&
                    <h2 className='text-[28px] capitalize color-[gray] font-semibold'>{apiData.title}</h2>
                  }
                  {isLoading &&<div className='w-[40%] py-[10px] rounded-lg skeleton'></div>}
                  {apiData &&
                  <div className='flex justify-between gap-2 items-center w-max'>
                      <span className='text-[14px] capitalize color-[gray] font-mdeium'>code: </span>
                      <span className='font-bold'>{apiData.code}</span>
                  </div>
                  }
              </div>

                {isLoading &&<div className='w-[100%] py-[10px] rounded-lg skeleton'></div>}
                {isLoading &&<div className='w-[100%] py-[10px] rounded-lg skeleton'></div>}
                {isLoading &&<div className='w-[60%] py-[10px] rounded-lg skeleton'></div>}
                {apiData &&
                <span className='text-[14px] mt-[20px] text-[#999999]'>
                    {apiData.descr}
                </span>
                }
    
            </div>
        </div>
        </div>
        
        {/* PRODUCT MAIN INFO */}

        <div className='flex min-w-[250px] p-[20px] bg-white rounded-lg flex-col h-max justify-between items-center gap-5'>

          <div className='flex w-max'>
            {isLoading &&<div className='w-[60%] py-[10px] rounded-lg skeleton'></div>}
            {!isLoading && apiData && (
              <div className='flex gap-2 items-center justify-between'>
                <span className='font-bold text-[36px]'>{apiData.price} ₾</span>
              </div>
              )
            }
          </div>

          <div className='flex flex-col gap-2  w-full '>
             <button disabled={isLoading} className='btn1 max-w-[200px]'>add cart</button> 
             <button disabled={isLoading} className='btn6 max-w-[200px]'>buy it now</button> 
          </div>


        </div>

      </div>

    </div>
    </MaxWidthWrapper>
  )
};

export default CurrectProductPage;


