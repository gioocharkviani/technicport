'use client'
import React from 'react'
import GeoFlag from '../../../public/flag/ge'
import UkFlag from '../../../public/flag/uk'
import RuFlag from '../../../public/flag/ru'
import { useLocale } from '@/hooks/locale-provider'

import {switchLocaleAction} from '../../actions/switch-locale';


const Lang = () => {

    const lagChange = async (lang:any) => {
        switchLocaleAction(lang)
    }

    const locale = useLocale();
    console.log(locale)

  return (
    <div className='w-max'>
        <ul className='flex gap-3'>
            
        <button disabled={locale === 'ge'} className={`${locale === 'ge' ? 'listStyle-1 active' : 'listStyle-1'}`} onClick={() => lagChange('ge')}>
                    <div className='flex gap-1 text-[13px] items-center uppercase'>
                        ge
                        <GeoFlag />
                    </div>
                </button>

                <button disabled={locale === 'en'} className={`${locale === 'en' ? 'listStyle-1 active' : 'listStyle-1'}`} onClick={() => lagChange('en')}>
                    <div className='flex gap-1 text-[13px] items-center uppercase'>
                        en
                        <UkFlag/>
                    </div>
                </button>

                <button disabled={locale === 'ru'} className={`${locale === 'ru' ? 'listStyle-1 active' : 'listStyle-1'}`} onClick={() => lagChange('ru')}>
                    <div className='flex gap-1 text-[13px] items-center uppercase'>
                        ru
                        <RuFlag />
                    </div>
                </button>

        </ul>
    </div>
  )
}

export default Lang