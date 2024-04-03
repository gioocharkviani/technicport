import React from 'react'
import { useTranslations } from 'next-intl'
import MenuLink from '../links/menuLink'

const NavMenu = () => {
  const t  = useTranslations('navigation')


  return (
   <div className='w-max lg:block hidden'>
    <ul className='flex gap-4 text-[15px] capitalize'>
        <MenuLink link='/' name={t('home')}/>
        <MenuLink link='/shop' name={t('shop')}/>
        <MenuLink link='/about' name={t('about')}/>
        <MenuLink link='/services' name={t('services')}/>
        <MenuLink link='/contact' name={t('contact')}/>
    </ul>
   </div>
  )
}

export default NavMenu