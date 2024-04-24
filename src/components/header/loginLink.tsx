'use client'
import React, { useState } from 'react'
import UserIcon from '../../../public/svg/userIcon'
import { useTranslation } from '@/i18n/client';
import { useModal } from '@/context/ModalContext';


import Signin from '../forms/signin/signin'

const LoginLink = () => {
  const {t} =  useTranslation('common');
  const { openModal} = useModal();


const handleOpenModal = () => {
  const title = 'ავტორიზაცია';
  const content = <Signin />;
  openModal(title, content);
};
  

  return (
    <>

    <div className='listStyle-1 w-max hidden lg:block'>
      
        <button onClick={handleOpenModal} className='h-full'>
          <div className='flex gap-1 text-[13px] items-center  capitalize' >
            <UserIcon />
             {t('loginBtn')}
          </div>
        </button>

    </div>

    </>
  )
}

export default LoginLink