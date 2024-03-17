import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import lines from '../../../public/lines.png'
import { useTranslations } from 'next-intl'
import MenuLink from '../links/menuLink'

const NavMenu = () => {
  const t  = useTranslations('navigation')


  return (
   <div className='w-max'>
    <ul className='flex gap-4 text-[15px]'>
        <MenuLink link='/' name={t('home')}/>
        <MenuLink link='/shop' name={t('shop')}/>
        <li className='flex items-center w-max'><Image src={lines} alt='lines' width={39} height={2}/></li>
        <MenuLink link='/about' name={t('about')}/>
        <MenuLink link='/services' name={t('services')}/>
        <MenuLink link='/contact' name={t('contact')}/>
    </ul>
   </div>
  )
}

export default NavMenu