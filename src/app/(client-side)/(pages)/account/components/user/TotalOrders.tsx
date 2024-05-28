import React from 'react'
import Image from 'next/image'
import order from '../../../../../../../public/png/account/order.png'
import Link from 'next/link'

const TotalOrders = () => {
  return (
      <Link href='/account/orders' className='min-h-[100px] flex gap-3 justify-center items-center whiteBoxShadow relative p-[10px] w-full rounded-md flex-col'>
        <div>
            <Image src={order} width={60} height={60} alt='123' />
        </div>
        <div className='flex gap-2  '>
            <span className='text-[18px] capitalize font-semibold'>orders:</span>
            <span className='text-[18px] uppercase font-semibold'>5</span>
        </div>
    </Link>  
  )
}

export default TotalOrders;