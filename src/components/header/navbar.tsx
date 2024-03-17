import React from 'react'
import NavMenu from './menu'
import Lang from './lang'
import LoginLink from './loginLink'

const Navbar = () => {
  return (
    <div className='border-b-[2px] border-[#D4D4D4] h-[55px] w-full flex justify-center items-center'>
        <div className='max-w-[1500px] w-full px-[10px] md:px-[30px] flex justify-between'>
            <NavMenu />
            <div className='w-max flex flex-row gap-[30px]'>
                <Lang />
                <LoginLink />
            </div>
        </div>
    </div>
  )
}

export default Navbar