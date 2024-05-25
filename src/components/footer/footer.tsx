
import React from 'react'
import MaxWidthWrapper from '../contentwrapper/maxWidthWrapper'
import Link from 'next/link'
import Title1 from '../title/title1'


const Footer = () => {
  return (

    <div className='w-full bg-[#F4F4F4] mb-[60px] md:mb-[0px] h-max py-[5px] mt-[20px]  flex justify-center'>
        <MaxWidthWrapper>
            <div className='flex flex-col gap-2'>

              <div className='w-full flex justify-between gap-7 bg-white rounded-xl p-[30px]'>
                  <div className='flex flex-col gap-2'>
                    <Title1 title='Menu' />
                    <ul className='flex flex-col'>
                      <Link href='/'>Home</Link>
                      <Link href='/'>About</Link>
                      <Link href='/'>Services</Link>
                      <Link href='/'>Contact</Link>
                    </ul>
                  </div> 
                  <div className='flex flex-col gap-2'>
                    <Title1 title='Menu' />
                    <ul className='flex flex-col'>
                      <Link href='/'>Home</Link>
                      <Link href='/'>About</Link>
                      <Link href='/'>Services</Link>
                      <Link href='/'>Contact</Link>
                    </ul>
                  </div> 
                  <div className='flex flex-col gap-2'>
                    <Title1 title='Menu' />
                    <ul className='flex flex-col'>
                      <Link href='/'>Home</Link>
                      <Link href='/'>About</Link>
                      <Link href='/'>Services</Link>
                      <Link href='/'>Contact</Link>
                    </ul>
                  </div> 
                  
                  <div className='flex flex-col gap-2'>
                    <Title1 title='Menu' />
                    <ul className='flex flex-col'>
                      <Link href='/'>Home</Link>
                      <Link href='/'>About</Link>
                      <Link href='/'>Services</Link>
                      <Link href='/'>Contact</Link>
                    </ul>
                  </div> 

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