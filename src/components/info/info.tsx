'use client'
import React, { useState, useEffect } from 'react';
import Title1 from '../title/title1';
import { useTranslation } from '@/i18n/client';
import axios from 'axios';
import { useLocale } from '@/hooks/locale-provider';

const Info = () => {

  const [data, setData] = useState<any>(null);
  const locale = useLocale();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://technicport.vercel.app/api/about');
        setData([
          response.data
        ]); 
      } catch (error) {
        return null
      }
    };

    fetchData();
  }, [locale]); 

  const { t } = useTranslation('common');

  return (
    <div className='w-full flex h-full flex-col bg-[#FFF] rounded-lg py-[20px] px-[20px] '>
      <Title1 title={t('info.header')} moreInfo={t('global.moreInfo')} link={`/about`} />
      <ul className='infoUl  h-[200px] relative overflow-y-auto flex flex-col gap-3 mt-[20px] text-[13px]'>
        {data ? data.map((i:any) => <li key={i}>{i}</li>) : null
        }
      </ul>
    </div>
  );
};

export default Info;
