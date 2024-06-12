'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';

const CartLink = () => {
  const count = useSelector((state:any) => state.cart.itemsQty);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Link href='/cart' className='cart-link'>
        <span>
          {isClient ? count || 0 : '0'}
        </span>
        <IoCartOutline />
    </Link>
  );
};

export default CartLink;
