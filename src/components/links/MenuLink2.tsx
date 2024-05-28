'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface MenuLinks {
    title: string,
    icon: any,
    link: string,
}

const MenuLink2 = ({title , icon , link}:MenuLinks ) => {

    const pathname = usePathname();
    const [active ,setActive] = useState(false);
 
    useEffect(()=>{
      if((pathname === `/${link}`)|| (pathname === '/account' ) && (link === '/account') || (pathname.includes(`${link}`) && (link !== "/account")) ) {
        setActive(true);
      } else {
        setActive(false);
      }
    }, [pathname, link]);

  return (
    <Link href={link} className={`${active ? 'active-acLink' : ''} flex hover:bg-[#ececec] w-full gap-3 items-center border-b-[1px] border-gray py-[8px]`}>
    <div className='w-[18px] h-[18px] flex justify-center items-center'>
        <Image width={18} height={18} src={icon} alt={title} />
    </div>
    <li className='text-[14px]'>{title}</li>
    </Link>
  )
}

export default MenuLink2