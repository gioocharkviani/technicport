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
        <button onClick={handleOpenModal} className='h-full listStyle-1 '>
          <div className='flex flex-col lg:flex-row lg:p-0 px-[5px] py-[5px] gap-2 lg:gap-1 text-[13px] items-center  capitalize' >
            <UserIcon />
             {t('loginBtn')}
          </div>
        </button>
    </>
  )
}

export default LoginLink