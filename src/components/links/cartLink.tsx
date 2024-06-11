"use client"
import Link from 'next/link';
import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
const CartLink = () => {
  const count =  0;

  return (
    <Link href='/cart' className='cart-link'>
      <span>
        {count}
      </span>
      <IoCartOutline />
    </Link>
  );
};

export default CartLink;
