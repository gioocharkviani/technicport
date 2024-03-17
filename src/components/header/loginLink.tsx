import Link from 'next/link'
import React from 'react'
import UserIcon from '../../../public/svg/userIcon'
import { useTranslations } from 'next-intl'

const LoginLink = () => {
  const t = useTranslations('header')
  return (
    <div className='listStyle-1 w-max'>
          <Link className='flex gap-1 text-[13px] items-center capitalize' href='/login'>
            <UserIcon />
             {t('login')} 
          </Link>
    </div>
  )
}

export default LoginLink