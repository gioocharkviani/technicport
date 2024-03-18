import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTranslations } from 'next-intl';

const Info = () => {
    const t = useTranslations('info');
  return (
    <div className='w-full flex flex-col'>

        <div className='w-full flex justify-between items-center'>
            <h2 className='font-bold uppercase text-[15px] smd:text-[20px] md:text-[30px]'>{t('header')}</h2>
            <Link href='/info' className='flex capitalize gap-2 md:text-[15px] items-center font-medium text-[13px]'>
                {t('moreAboutUs')}
                <FaLongArrowAltRight className='text-color1'/>
            </Link>
        </div>

        <ul className='infoUl px-[20px] md:px-[0] flex flex-col gap-3 mt-[20px] text-[13px]'>
            <li>{t('info1')}</li>
            <li>{t('info1')}</li>
        </ul>
        
    </div>
  )
}

export default Info