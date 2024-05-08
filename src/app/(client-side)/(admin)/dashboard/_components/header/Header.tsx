'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const Header = () => {
  const {data} = useSession();
  return (
    <div className='AdminHeader'>

      <div></div>

        <div className='bg-white'>
          {data?.user.firstName}
        </div>

    </div>
  )
}

export default Header