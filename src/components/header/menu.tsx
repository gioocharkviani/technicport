import React from 'react'
import MenuLink from '../links/menuLink'
import { createTranslation } from '@/i18n/server';

const NavMenu = async () => {
  const {t} = await createTranslation('common');

  return (
   <div className='w-max lg:block hidden'>
    <ul className='flex gap-4 text-[15px] capitalize'>
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