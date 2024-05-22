import React from 'react'
import LoginLink from '../header/loginLink'
import Link from 'next/link'
import { IoCartOutline } from 'react-icons/io5'

const BottomNav = () => {
  return (
    <div className='fixed flex justify-center gap-3 items-center lg:hidden w-full bottom-0 left-0 min-h-[50px] z-[2] whiteBoxShadow'>
          
          <div>
              <LoginLink />
          </div>

          <Link href="/cart"  className='h-full listStyle-1 '>
            <div className='flex flex-col lg:flex-row lg:p-0 px-[5px] py-[5px] gap-2 lg:gap-1 text-[13px] items-center  capitalize' >
              <IoCartOutline />
              cart
            </div>
          </Link>

    </div>
  )
}

export default BottomNav