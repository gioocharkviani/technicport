'use client'
import { useLocale } from "next-intl"
import Link from "next/link"

const MenuLink = ({link , name}:{link:string, name:string}) => {
    const locale = useLocale();
  return (
    <li>
        <Link href={`/${locale}/${link}`}>{name}</Link>
    </li>
  )
}

export default MenuLink;