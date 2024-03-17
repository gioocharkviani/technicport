'use client'
import { useLocale } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const MenuLink = ({link , name}:{link:string, name:string}) => {
    const locale = useLocale();
    const pathname = usePathname();
    const [active ,setActive] = useState(false);

    useEffect(()=>{
      console.log(link)
      if((pathname === `/${locale}${link}`) || (link === "/" && pathname === `/${locale}`) || (pathname.includes(`${locale}`) && pathname.includes(`${link}`) && (link !== "/")) ) {
        setActive(true);
      } else {
        setActive(false);
      }
    }, [pathname, locale, link]);

  return (
    <li className={`${active ? 'text-color1' : 'hover:text-color1 transition-all'}`}>
        <Link href={`/${locale}/${link}`}>{name}</Link>
    </li>
  )
}

export default MenuLink;