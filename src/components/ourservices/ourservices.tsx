'use client'
import React from 'react'
import Title1 from '../title/title1'
import { useLocale } from 'next-intl'

const Ourservices = () => {
  const locale = useLocale();

  return (
    <div className='w-full flex flex-col'>
        <Title1 title='Our Services' link={`/${locale}/services`}/>
        <div className='grid grid-cols-3 gap-5 justify-between mt-[20px]'>
            <div className='h-[170px] rounded-lg bg-[#dcdcdc]'></div>
            <div className='h-[170px]  rounded-lg bg-[#dcdcdc]'></div>
            <div className='h-[170px]  rounded-lg bg-[#dcdcdc]'></div>
            <div className='h-[170px]  rounded-lg bg-[#dcdcdc]'></div>
            <div className='h-[170px]  rounded-lg bg-[#dcdcdc]'></div>
            <div className='h-[170px]  rounded-lg bg-[#dcdcdc]'></div>
        </div>
    </div>
  )
}

export default Ourservices