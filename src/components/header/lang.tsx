'use client'
import React from 'react'

import GeoFlag from '../../../public/flag/ge'
import UkFlag from '../../../public/flag/uk'
import RuFlag from '../../../public/flag/ru'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

const Lang = () => {
    const pathname = usePathname();
    const params = useParams();
    const router = useRouter();

    const lagChange = async (lang:any) => {
        const newLocale = lang;
        const newPathname =  pathname.replace(`/${params.locale}/` ,`/${newLocale}/`)

        if(params.locale !== newLocale && pathname !== `/${params.locale}`){
            router.replace(`${newPathname}`)
        }

        if(pathname === `/${params.locale}`){
            router.replace(`${newLocale}`)
        }
    }

  return (
    <div className='w-max'>
        <ul className='flex gap-3'>
            
            <button className='listStyle-1' onClick={() => lagChange('ge')}>
                <div  className='flex gap-1 text-[13px] items-center uppercase'>
                    ge
                    <GeoFlag />
                </div>
            </button>

            <button className='listStyle-1' onClick={() => lagChange('en')}>
                <div  className='flex gap-1 text-[13px] items-center uppercase'>
                en
                 <UkFlag/>
                </div>
            </button>

            <button className='listStyle-1' onClick={() => lagChange('ru')}>
                <div  className='flex gap-1 text-[13px] items-center uppercase'>
                    ru<RuFlag />
                </div>
            </button>

        </ul>
    </div>
  )
}

export default Lang