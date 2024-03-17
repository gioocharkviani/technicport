import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import lines from '../../../public/lines.png'
import { useTranslations } from 'next-intl'

const NavMenu = () => {
  const t  = useTranslations('navigation')

  return (
   <div className='w-max'>
    <ul className='flex gap-4 text-[15px]'>
        <li><Link href='/'>{t('home')}</Link></li>
        <li><Link href='/'>{t('shop')}</Link></li>
        <li className='flex items-center w-max'><Image src={lines} alt='lines' width={39} height={2}/></li>
        <li><Link href='/'>{t('about')}</Link></li>
        <li><Link href='/'>{t('servises')}</Link></li>
        <li><Link href='/'>{t('contact')}</Link></li>
    </ul>
   </div>
  )
}

export default NavMenu