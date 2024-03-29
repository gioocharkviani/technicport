import React from 'react'
import { useTranslations } from 'next-intl';
import Title1 from '../title/title1';

const Info = () => {
    const t = useTranslations();
  return (
    <div className='w-full flex h-full flex-col bg-[#FFF] rounded-lg py-[20px] px-[20px] '>

    <Title1 title={t('info.header')} image={''} moreInfo={t('info.moreAboutUs')} link={`/about`}/>

        <ul className='infoUl px-[20px] md:px-[0] flex flex-col gap-3 mt-[20px] text-[13px]'>
            <li>{t('info.info1')}</li>
        </ul>
        
    </div>
  )
}

export default Info