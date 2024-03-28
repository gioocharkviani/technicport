import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Info = () => {
    const t = useTranslations('info');
  return (
    <div className='w-full flex flex-col bg-[#FFF] rounded-lg py-[20px] px-[20px] '>

        <div className='w-full flex justify-between items-center'>
            
            <h2 className='font-bold uppercase text-[15px] smd:text-[20px] md:text-[30px]'>{t('header')}</h2>

            <Link href='/about'>
                <div  className='flex capitalize gap-2 md:text-[15px] items-center font-medium text-[13px]'>
                {t('moreAboutUs')}
                <FaLongArrowAltRight className='text-color1'/>
                </div>
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