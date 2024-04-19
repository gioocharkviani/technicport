import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/logo.png'

const Logo = () => {
  return (
    <Link href='/'>
        <Image src={logo} alt='technicPort Logo' width={748} height={212} />
    </Link>
  )
}

export default Logo