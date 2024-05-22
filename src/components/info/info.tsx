'use client';
import React, { useState, useEffect } from 'react';
import Title1 from '../title/title1';
import { useTranslation } from '@/i18n/client';
import axios from 'axios';
import { useLocale } from '@/hooks/locale-provider';

const Info = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const locale = useLocale();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/about');
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching about data:', error);
      }
    };

    fetchData();
  }, [locale]);

  const { t } = useTranslation('common');

  return (
    <div className='w-full flex h-full flex-col bg-[#FFF] rounded-lg py-[20px] px-[20px] '>
      <Title1 title={t('info.header')} moreInfo={t('global.moreInfo')} link={`/about`} />
      
      {isLoading ? (
        <div className='w-full flex flex-col gap-2 mt-[20px]'>
          {[...Array(5)].map((_, index) => (
            <div key={index} className='w-[100%] py-[8px] rounded-lg skeleton'></div>
          ))}
        </div>
      ) : data !== null ? (
        <ul className='infoUl h-[200px] relative overflow-y-auto flex flex-col gap-3 mt-[20px] text-[13px]'>
          <li>{data}</li>
        </ul>
      ) : (
        <div className='w-full h-full flex justify-center items-center'>
          <span className='text-black'>No information available about us.</span>
        </div>
      )}
    </div>
  );
};

export default Info;
