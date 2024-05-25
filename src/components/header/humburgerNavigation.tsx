'use client'

import { useEffect, useState } from "react";
import { useTranslation } from "@/i18n/client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuLink1 from "../links/menuLink1";

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
          <ul className=' mt-[60px] flex flex-col w-full leading-none gap-4 text-[15px] capitalize'>
            <MenuLink1 link='/' name={t('links.home')}/>
            <MenuLink1 link='/shop' name={t('links.shop')}/>
            <MenuLink1 link='/about' name={t('links.about')}/>
            <MenuLink1 link='/services' name={t('links.services')}/>
            <MenuLink1 link='/contact' name={t('links.contact')}/>
        </ul>
          {/* } */}
        </div>
        

    </div>
  )
}

export default HumburgerNavigation