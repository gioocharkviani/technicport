'use client'
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

const MenuLink = ({link , name}:{link:string, name:string}) => {
    const pathname = usePathname();
    const [active ,setActive] = useState(false);
 
    useEffect(()=>{
      if((pathname === `/${link}`)|| (pathname === '/' ) && (link === '/') || (pathname.includes(`${link}`) && (link !== "/")) ) {
        setActive(true);
      } else {
        setActive(false);
      }
    }, [pathname, link]);

  return (
    <li className={`bg-[#ebebeb] px-[10px] py-[10px]  rounded-md flex justify-center w-full lg:bg-transparent lg:p-[0]  lg:rounded-none lg:w-max  ${active ? 'text-color1' : 'hover:text-color1 transition-all'}` }>
      <Link href={link}>
          {name}
      </Link>
    </li>
  )
}

export default MenuLink;
