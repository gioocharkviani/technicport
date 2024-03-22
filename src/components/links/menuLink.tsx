'use client'
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import LinkWrapper from "./linkWrapper"

const MenuLink = ({link , name}:{link:string, name:string}) => {
    const locale = useLocale();
    const pathname = usePathname();
    const [active ,setActive] = useState(false);
 
    useEffect(()=>{
      if((pathname === `/${locale}${link}`) || (link === "/" && pathname === `/${locale}`) || (pathname.includes(`${locale}`) && pathname.includes(`${link}`) && (link !== "/")) ) {
        setActive(true);
      } else {
        setActive(false);
      }
    }, [pathname, locale, link]);

  return (
    <li className={`${active ? 'text-color1' : 'hover:text-color1 transition-all'}`}>

      <LinkWrapper link={link}>
          {name}
      </LinkWrapper>
    </li>
  )
}

export default MenuLink;
