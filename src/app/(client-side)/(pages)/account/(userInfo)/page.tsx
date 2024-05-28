'use client'
import React from 'react'
import UserCard from '../components/user/UserCard';
import TotalPayment from '../components/user/TotalPayment';
import TotalOrders from '../components/user/TotalOrders';
import { useSession } from 'next-auth/react';

const UserInfopage = () => {
  const {data:session} = useSession();

  return (
    <div className='w-full p-[10px] flex flex-col gap-[30px]'>

      <div className='flex justify-between gap-8 flex-col lg:flex-row'>
        <UserCard data={session?.user}/>
        <TotalPayment />
        <TotalOrders />
      </div>
      
      
    </div>
  )
}

export default UserInfopage;