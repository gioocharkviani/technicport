'use client'
import React from 'react'
import GeoFlag from '../../../public/flag/ge'
import UkFlag from '../../../public/flag/uk'
import RuFlag from '../../../public/flag/ru'

import {switchLocaleAction} from '../../actions/switch-locale';

const Lang = () => {

    const lagChange = async (lang:any) => {
        switchLocaleAction(lang)
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
                    ru
                    <RuFlag />
                </div>
            </button>

        </ul>
    </div>
  )
}

export default Lang