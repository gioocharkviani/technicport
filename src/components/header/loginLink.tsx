'use client'
import React, { useState } from 'react'
import UserIcon from '../../../public/svg/userIcon'
import { useTranslations } from 'next-intl'
import { Modal } from '../modal/modal'

const LoginLink = () => {
  const t = useTranslations('header')

  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);

  return (
    <>

    <Modal openModal={modal} closeModal={()=> setModal(false)}> 
      
    </Modal>


    <div className='listStyle-1 w-max hidden lg:block'>
      
        <button onClick={openModal}>
          <div className='flex gap-1 text-[13px] items-center capitalize' >
            <UserIcon />
             {t('login')} 
          </div>
        </button>

    </div>

    </>
  )
}

export default LoginLink