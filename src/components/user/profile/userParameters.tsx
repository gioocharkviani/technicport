'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import userAvatar from '../../../../public/userIcon.svg';
import Image from 'next/image';
import { useState } from 'react';
import ChangePasswordForm from './changePasswordForm';
import ChangeUserInfo from './changeUserInfo';
import logo from '../../../../public/logo.png'

const UserParameters = () => {
  const {data : session} = useSession();
  const [content, setContent] = useState<string | null>(null);

  return (
  <div className='flex flex-col gap-3 items-center'>

    {content === 'changePassword' && 
        <ChangePasswordForm />
    }
    {content === 'changeUserInfo' && 
      <ChangeUserInfo />
    }

    {!content &&
      <div className='flex items-center justify-between w-full gap-[50px] mt-[20px] px-[30px]'>
      
      <div className='w-[100px] h-[100px] bg-[#e3e3e3] rounded-[50%] flex justify-center items-center overflow-hidden object-contain'>
        <Image className='object-contain' src={session?.user.photo ? session?.user.photo : logo} alt='' width={50} height={50} />
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
    }

    <div className='flex justify-between w-full gap-4 mt-[20px]'>

      {content !== null &&
        <button onClick={()=> setContent(null)} className="btn4">
        უკან
       </button>
      }

      {content !== 'changePassword' &&
        <button onClick={()=> setContent('changePassword')} className="btn4">
        პაროლის განახლება
      </button>
      }


      {content !== 'changeUserInfo' &&
      <button onClick={()=> setContent('changeUserInfo')} className="btn4">
        მონაცემების შეცვლა
      </button>
      }


    </div>

  </div>  
  )
}

export default UserParameters