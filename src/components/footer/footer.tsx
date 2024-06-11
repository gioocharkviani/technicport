
import React from 'react'
import MaxWidthWrapper from '../contentwrapper/maxWidthWrapper'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (

    <div className='w-full bg-[#F4F4F4] mb-[60px] md:mb-[0px] h-max py-[5px] mt-[20px]  flex justify-center'>
        <MaxWidthWrapper>
            <div className='flex flex-col gap-2'>

              <div className='w-full flex justify-between gap-7 bg-white rounded-xl p-[20px]'>
                  <div className='flex flex-col gap-2 items-center justify-center'>
  
                    <ul className='flex gap-4 text-[14px] capitalize text-gray'>
                      <Link href='/'><li>home</li></Link>
                      <Link href='/'><li>shop</li></Link>
                      <Link href='/'><li>about</li></Link>
                      <Link href='/'><li>services</li></Link>
                      <Link href='/'><li>contact</li></Link>
                      <Link href='/privacypolicy'><li>privacy policy</li></Link>
                    </ul>
                  </div> 

                  
                  <div className='flex flex-col gap-2 items-center justify-center'>
                    {/* <Title1 title='Follow us' /> */}
                    <ul className='grid grid-cols-3 gap-2'>
                      <Link href='/'>
                        <li className='w-[40px] h-[40px] flex justify-center items-center  rounded-md bg-[#eaeaea]'>
                          <FaFacebookF className='text-[#4f4fe4]'/>
                        </li>
                      </Link>
                      <Link href='/'>
                        <li className='w-[40px] h-[40px] flex justify-center items-center  rounded-md bg-[#eaeaea]'>
                          <FaInstagram  className='text-[#e558bd]'/>
                        </li>
                      </Link>
                      <Link href='/'>
                        <li className='w-[40px] h-[40px] flex justify-center items-center rounded-md bg-[#eaeaea]'>
                          <FaWhatsapp  className='text-[#4da839]'/>
                        </li>
                      </Link>
  
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