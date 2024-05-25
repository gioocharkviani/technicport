import React from 'react'
import Navbar from './navbar'


const Header =async () => {

  return (
    <div className='w-full flex justify-center flex-col h-max bg-[#FFF] fixed z-[99] top-0 left-0'>
      <Navbar />
    </div>
  )
}

export default Header 