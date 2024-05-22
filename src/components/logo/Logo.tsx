import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/logo.png'

const Logo = () => {
  return (
    <Link href='/' className='w-full h-full'>
        <Image src={logo} alt='technicPort Logo' width={748} height={212} priority/>
    </Link>
  )
}

export default Logo