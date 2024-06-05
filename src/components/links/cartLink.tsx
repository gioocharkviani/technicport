"use client"
import Link from 'next/link';
import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';

const CartLink = () => {
  const count = useSelector((state: RootState) => state.cart.totalQuantity);

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
