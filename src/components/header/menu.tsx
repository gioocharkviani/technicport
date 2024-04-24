'use client'
import React from 'react'
import MenuLink from '../links/menuLink'
import { useTranslation } from '@/i18n/client';

const NavMenu = () => {
  const {t} =  useTranslation('common');


  return (
   <div className='w-max lg:block hidden'>
    <ul className='flex leading-none gap-4 text-[15px] capitalize'>
        <MenuLink link='/' name={t('links.home')}/>
        <MenuLink link='/shop' name={t('links.shop')}/>
        <MenuLink link='/about' name={t('links.about')}/>
        <MenuLink link='/services' name={t('links.services')}/>
        <MenuLink link='/contact' name={t('links.contact')}/>
    </ul>
   </div>
  )
}

export default NavMenu