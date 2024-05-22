'use client'

import { useEffect, useState } from "react";
import MenuLink from "../links/menuLink";
import { useTranslation } from "@/i18n/client";
import { usePathname } from "next/navigation";

const HumburgerNavigation = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState<boolean>(false);
    
    const handleClick = () => {
      setOpen(!open);
    };

    useEffect(() => {
        if (open) {
            document.body.style.overflowY = "hidden";
        }else {
            document.body.style.overflowY = "auto";
        }

    }, [open ]);

    useEffect(() => {
      setOpen(false); 
  }, [pathname]);

    const {t} =  useTranslation('common');
  return (
    <div className='w-max block lg:hidden'>

        <div className={`${open ? 'humburger-btn humburger-active' : 'humburger-btn'}`} onClick={handleClick}>
          <div className='bar-line'></div>
        </div>
        
        <div className={`humburgerMenuWrapper ${open? 'active' : ''}`}>
          {/* {open && */}
          <ul className=' mt-[60px] flex flex-col leading-none gap-4 text-[15px] capitalize'>
            <MenuLink link='/' name={t('links.home')}/>
            <MenuLink link='/shop' name={t('links.shop')}/>
            <MenuLink link='/about' name={t('links.about')}/>
            <MenuLink link='/services' name={t('links.services')}/>
            <MenuLink link='/contact' name={t('links.contact')}/>
        </ul>
          {/* } */}
        </div>
        

    </div>
  )
}

export default HumburgerNavigation