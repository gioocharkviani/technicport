'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import userAvatar from '../../../../public/userIcon.svg';
import Image from 'next/image';

const UserParameters = () => {
  const {data : session} = useSession();

  return (
  <div className='flex flex-col gap-3 items-center'>

    <div className='flex  justify-between w-full gap-[20px] mt-[20px] px-[30px]'>
      
      <div className='w-[100px] h-[100px] bg-[#e3e3e3] rounded-[50%] flex justify-center items-center overflow-hidden object-contain'>
        <Image className='object-contain' src={session?.user.photo ? session?.user.photo : userAvatar} alt='' width={50} height={50} />
      </div>

      <div className='flex flex-col gap-4'>

        <div className='flex justify-between'>

        <div className='flex flex-col'>
          <span className='text-[10px] font-medium capitalize'>First Name</span>
          <span className='text-[14px] font-semibold capitalize'>{session?.user?.firstName}</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-[10px] font-medium capitalize'>last Name</span>
          <span className='text-[14px] font-semibold capitalize'>{session?.user?.lastName}</span>
        </div>


        </div>

        <div className='flex flex-col'>
          <span className='text-[10px] font-medium capitalize'>email</span>
          <span className='text-[14px] font-semibold lowercase'>{session?.user?.email}</span>
        </div>

        <div className='flex flex-col'>
          <span className='text-[10px] font-medium capitalize'>phone</span>
          <span className='text-[14px] font-semibold capitalize'>{session?.user?.phone}</span>
        </div>

      </div>

    </div>

    <div className='flex justify-between w-full gap-4 mt-[20px]'>
      <button className="btn3">
        პაროლის განახლება
      </button>
      <button className="btn3">
        მონაცემების შეცვლა
      </button>
    </div>

  </div>  
  )
}

export default UserParameters