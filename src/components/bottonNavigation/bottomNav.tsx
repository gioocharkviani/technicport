import React from 'react'
import LoginLink from '../links/loginLink'
import Link from 'next/link'
import { IoCartOutline } from 'react-icons/io5'
import CartLink from '../links/cartLink'

const BottomNav = () => {
  return (
    <div className='fixed flex justify-center items-center lg:hidden w-full bottom-0 left-0 min-h-[54px] z-[2] whiteBoxShadow'>
          
        <div className='w-max p-[5px] flex gap-3 items-center'>

          <div className='h-full w-max'>
              <LoginLink />
          </div>

          <div className='h-full w-max'>
            <CartLink />
          </div>

        </div>

    </div>
  )
}

export default BottomNav