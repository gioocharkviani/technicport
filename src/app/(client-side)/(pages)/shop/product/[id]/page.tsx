'use client'
import MaxWidthWrapper from '@/components/contentwrapper/maxWidthWrapper'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { IoHomeOutline } from 'react-icons/io5'
import ProductSwiper from '../../components/produtSwiper/ProductSwiper'
import { useFetch } from '@/hooks/useFetch'
import { useRouter } from 'next/navigation'

const CurrectProductPage = ({ params }: { params: any }) => {
  const { isLoading, apiData, serverError } = useFetch({ url: `/api/products/getcurrent?id=${params.id}` })
  const router = useRouter()

  useEffect(() => {
    if (serverError) {
      router.push('/404')
    }
  }, [serverError, router])

  return (
    <MaxWidthWrapper>
      <div className='w-full flex flex-col gap-5'>

        {/* PAGE MAP */}
        <div className='bg-white flex justify-between items-center mt-[25px] px-[10px] py-[5px] rounded-xl'>
          <div className='flex text-[14px] gap-2'>
            <Link href='/' className='hover:opacity-50 color-[gray] font-light flex items-center gap-1'>
              <IoHomeOutline className='color-[gray]' />
              home
            </Link>
            <span className='color-[gray] font-light'>/</span>
            <Link href='/shop' className='hover:opacity-50 color-[gray] font-light'>shop</Link>
          </div>
          <div>
            {apiData &&
              <div className='flex text-[14px] justify-between items-center gap-2 w-full'>
                <span className='color-[gray] font-light'>category:</span>
                <span className='font-bold'>{apiData.category}</span>
              </div>
            }
          </div>
        </div>
        {/* PAGE MAP */}

        <div className='flex justify-between gap-4'>
          {/* PRODUCT MAIN INFO */}
          <div className='w-full h-full bg-white p-[20px] rounded-xl'>
            <div className='flex w-full md:flex-row flex-col gap-7 md:gap-5 justify-between'>
              {apiData &&
                <ProductSwiper images={apiData?.images} tumb={apiData?.tumbnail} />
              }
              <div className='lg:flex-[1.5] flex-[2] flex flex-col gap-4'>
                <div className='flex-col flex md:flex-row gap-2 md:gap-5 w-full justify-between'>
                  {apiData &&
                    <>
                      <h2 className='text-[28px] capitalize color-[gray] font-semibold'>{apiData.title}</h2>
                      <div className='flex justify-between gap-2 items-center w-max'>
                        <span className='text-[14px] capitalize color-[gray] font-medium'>code: </span>
                        <span className='font-bold'>{apiData.code}</span>
                      </div>
                    </>
                  }
                </div>
                {apiData &&
                  <span className='text-[14px] mt-[20px] text-[#999999]'>
                    {apiData.descr}
                  </span>
                }
              </div>
            </div>
          </div>
          {/* PRODUCT MAIN INFO */}
          {!isLoading && apiData && (
            
            <div className='flex min-w-[250px] p-[20px] bg-white rounded-lg flex-col h-max justify-between items-center gap-5'>
            <div className='flex w-max'>
              {apiData && (
                <div className='flex gap-2 items-center justify-between'>
                  <span className='font-bold text-[36px]'>{apiData.price} ₾</span>
                </div>
              )}
            </div>

            <div className='flex flex-col gap-2 w-full'>
              <button disabled={!apiData} className='btn1 max-w-[200px]'>add cart</button>
              <button disabled={!apiData} className='btn6 max-w-[200px]'>buy it now</button>
            </div>
          </div>
          )
      }
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default CurrectProductPage
