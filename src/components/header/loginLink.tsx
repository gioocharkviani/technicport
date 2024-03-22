import React from 'react'
import UserIcon from '../../../public/svg/userIcon'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LinkWrapper from '../links/linkWrapper'

const LoginLink = () => {
  const t = useTranslations('header')
  return (
    <div className='listStyle-1 w-max hidden lg:block'>
        <LinkWrapper link='/login'>
          <div className='flex gap-1 text-[13px] items-center capitalize' >
            <UserIcon />
             {t('login')} 
          </div>
        </LinkWrapper>
    </div>
  )
}

export default LoginLink