'use client'
import MaxWidthWrapper from '@/components/contentwrapper/maxWidthWrapper'
import axios from 'axios'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useLocale } from '@/hooks/locale-provider';
import { IoHomeOutline } from 'react-icons/io5';
import ProductSwiper from '../../components/produtSwiper/ProductSwiper';


  export default function page ({params}:{params: any}) {
    const locale = useLocale();
    const [data, setData] = useState<any | null>(null);
    const [error, setError] = useState<string>();
    const [isLoading, SetIssLoading] = useState<boolean>(true);
    useEffect(()=>{
        const getData = async () => {
            try {
              const res = await axios.get(`/api/products/getcurrent?id=${params.id}`);
              if (res.status === 200) {
                setData(res.data);
                SetIssLoading(false)
              } else {
                setError('Error during fetching data');
                SetIssLoading(false)
              }
            } catch (error) {
              setError('Error during fetching data');
              SetIssLoading(false)
            }
          };
        getData();
    },[locale])

  return (
    <MaxWidthWrapper> 
        <div className='w-full flex flex-col gap-5'>

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
                {!isLoading &&
                <div className='flex text-[14px] justify-between items-center gap-2 w-full'>
                    <span className=' color-[gray] font-light'>category:</span>
                    <span className='font-bold'>{data.category}</span>
                </div>
                }
            </div>
        </div>

        <div className='w-full h-full  bg-white p-[20px] rounded-xl'>
        <div className='flex w-full md:flex-row flex-col gap-7 md:gap-5 justify-between'>
          {isLoading && <div className='flex-[1] h-[300px] skeleton'></div>}
          {!isLoading &&
                <ProductSwiper images={data?.images} tumb={data?.tumbnail}/>
          }
            <div className='lg:flex-[1.5] flex-[2] flex flex-col  gap-4'>
              <div className='flex-col flex md:flex-row  gap-2 md:gap-5 w-full justify-between'>
                
                {isLoading &&<div className='w-[70%] py-[10px] rounded-lg skeleton'></div>}
                {!isLoading &&
                    <h2 className='text-[28px] capitalize color-[gray] font-semibold'>{data.title}</h2>
                }
                  {isLoading &&<div className='w-[40%] py-[10px] rounded-lg skeleton'></div>}
                  {!isLoading &&
                  <div className='flex justify-between gap-2 items-center w-max'>
                      <span className='text-[14px] capitalize color-[gray] font-mdeium'>code: </span>
                      <span className='font-bold'>{data.code}</span>
                  </div>
                  }
              </div>

                {isLoading &&<div className='w-[100%] py-[10px] rounded-lg skeleton'></div>}
                {isLoading &&<div className='w-[100%] py-[10px] rounded-lg skeleton'></div>}
                {isLoading &&<div className='w-[60%] py-[10px] rounded-lg skeleton'></div>}
                {!isLoading &&
                <span className='text-[14px] mt-[20px] text-[#999999]'>
                    {data.descr}
                </span>
                }

                <div className='flex mt-[50px] w-full justify-between items-center gap-5'>

                    <div className='flex lg:flex-row flex-col gap-2  w-full '>
                        <input type='number' min={1} defaultValue={1}  max={isLoading? 0 : data.quantity} className='input1 appearance-auto w-full max-w-[200px]'/>
                        <button disabled={isLoading} className='btn1 max-w-[200px]'>add cart</button> 
                        <button disabled={isLoading} className='btn6 max-w-[200px]'>buy it now</button> 
                    </div>

                    <div className='flex w-max justify-end'>
                    {isLoading &&<div className='w-[60%] py-[10px] rounded-lg skeleton'></div>}
                    {!isLoading &&
                    <div className='flex gap-2 items-center'>
                    <span className='md:text-[15px] flex gap-3 uppercase color-[gray] font-mdeium'>price:</span>
                    <span className='font-bold text-[20px]'>{data.price}</span>
                    </div>
                    }
                    </div>

                </div>
            </div>
        </div>
        </div>

    </div>
    </MaxWidthWrapper>
  )
}

