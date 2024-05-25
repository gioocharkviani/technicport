import Link from 'next/link';
import React from 'react'
import { IoCartOutline } from 'react-icons/io5';

const CartLink = () => {
  return (
    <Link href='/cart' className='cart-link'>
        <span>0</span>
        <IoCartOutline />
    </Link>
  )
}

export default CartLink;