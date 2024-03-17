'use client'
interface pageProps {
    link:string,
    children:React.ReactNode
}
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const LocaleLink = ({link ,children}:pageProps) => {
    const locale = useLocale();
  return (
    <Link href={`/${locale}/${link}`} >
        {children}
    </Link>
  )
}

export default LocaleLink