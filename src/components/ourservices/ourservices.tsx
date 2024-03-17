'use client'
import React from 'react'
import Title1 from '../title/title1'
import { useLocale } from 'next-intl'
import serviceimage from '../../../public/png/service.png'

const Ourservices = () => {

  return (
    <div className='w-full flex flex-col'>
        <Title1 title='Our Services' image={serviceimage} link={`/services`}/>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 justify-between mt-[20px]'>
            <div className='ssm:h-[170px] h-[100px] rounded-lg bg-[#dcdcdc]'></div>
            <div className='ssm:h-[170px] h-[100px] rounded-lg bg-[#dcdcdc]'></div>
            <div className='ssm:h-[170px] h-[100px] rounded-lg bg-[#dcdcdc]'></div>
            <div className='ssm:h-[170px] h-[100px] rounded-lg bg-[#dcdcdc]'></div>
            <div className='ssm:h-[170px] h-[100px] rounded-lg bg-[#dcdcdc]'></div>
            <div className='ssm:h-[170px] h-[100px] rounded-lg bg-[#dcdcdc]'></div>
        </div>
    </div>
  )
}

export default Ourservices