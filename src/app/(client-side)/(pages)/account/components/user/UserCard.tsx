import React from 'react'
import Image from 'next/image'
import { FaUserEdit } from 'react-icons/fa'
import user from '../../../../../../../public/png/account/user.png'
import Link from 'next/link'

const UserCard = ({data}:any) => {
  return (
    <div className='min-h-[100px] flex gap-3 whiteBoxShadow relative p-[10px] w-full rounded-md'>

        <div className='w-[100px] h-[100px] flex justify-center items-center rounded-md bg-[#d8d8d8]'>
          <Image src={user} width={60} height={60} alt='user'/>
        </div>

        <div className='flex flex-col gap-1'>
          <div className='text-[18px] capitalize font-semibold flex gap-2'>
            <span>{data?.firstName}</span>
            <span>{data?.lastName}</span>
          </div>
          <div className='flex gap-2 items-center'>
            <span>status:</span>
            <span>{data?.status}</span>
          </div>

          {data?.role === 'ADMIN' &&
            <div className='flex gap-2 items-center mt-[10px]'>
            <Link target='_blank' href='/dashboard' >
            <span className='bg-color2 text-white rounded-md px-[10px] py-[2px]'>{data?.role}</span>
            </Link>
          </div>
          }

        </div>

        <Link title='პარამეტრები' href='/account/parameters' className='absolute bottom-[-15px] rounded-[50%] flex justify-center items-center right-[-15px] w-[30px] h-[30px] bg-color2'>
          <FaUserEdit className='text-white'/>
        </Link>

      </div>

  )
}

export default UserCard