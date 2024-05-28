import React from 'react'
import Image from 'next/image'
import payment from '../../../../../../../public/png/account/payments.png'
import Link from 'next/link'

const TotalPayment = () => {
  return (
      <Link href='/account/payments' className='min-h-[100px] flex gap-3 justify-center items-center whiteBoxShadow relative p-[10px] w-full rounded-md flex-col'>
        <div>
            <Image src={payment} width={60} height={60} alt='123' />
        </div>
        <div className='flex gap-2'>
            <span className='text-[18px] capitalize font-semibold'>total Payment:</span>
            <span className='text-[18px] uppercase font-semibold'>500$</span>
        </div>
    </Link>  
  )
}

export default TotalPayment