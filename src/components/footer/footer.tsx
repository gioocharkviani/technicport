import React from 'react'
import MaxWidthWrapper from '../contentwrapper/maxWidthWrapper'

const Footer = () => {
  return (
    <div className='w-full bg-[#F4F4F4] mt-[80px] py-[5px] flex justify-center'>
        <MaxWidthWrapper>
            <div className='flex flex-col'>
 
              <div className='flex justify-between items-center py-[10px]'>

                <div></div>
                <div></div>

              </div>

              <div className='h-[30px] flex justify-center items-center border-t-[1px] border-[#bdbdbd]'>
                <span className='text-[13px] '>
                 © 2023 DOMAIN NAME - All Rights Reserved
                </span>
              </div>


            </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default Footer