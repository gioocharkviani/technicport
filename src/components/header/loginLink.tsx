'use client'
import React, { useState } from 'react'
import UserIcon from '../../../public/svg/userIcon'
import { useTranslation } from '@/i18n/client';


import { Modal } from '../modal/modal'
import Signin from '../forms/signin/signin'
import SignUp from '../forms/register/singUp'

const LoginLink = () => {

  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const {t} =  useTranslation('common');
  const [login, setLogin] = useState(true);
  
  return (
    <>
    <Modal title={login? 'ავტორიზაცია' : 'რეგისტრაცია'} openModal={modal} closeModal={()=> setModal(false)}> 

      {login &&
        <Signin />
      }

      {
        !login && 
        <SignUp />
      }

      <div className='w-full border-t-[1px] border-gray-200 mt-[15px] py-[10px]'>
        {login &&
        <button onClick={()=> setLogin(false)} className='w-full text-[13px]'>შექმენი ახალი ანგარიში</button>
        }
        {!login &&
          <button onClick={()=> setLogin(true)} className='w-full text-[13px]'>ავტორიზაცია</button>
        }
      </div>

    </Modal>


    <div className='listStyle-1 w-max hidden lg:block'>
      
        <button onClick={openModal}>
          <div className='flex gap-1 text-[13px] items-center capitalize' >
            <UserIcon />
             {t('loginBtn')}
          </div>
        </button>

    </div>

    </>
  )
}

export default LoginLink