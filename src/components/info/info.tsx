'use client';
import React, { useState, useEffect } from 'react';
import Title1 from '../title/title1';
import { useTranslation } from '@/i18n/client';
import axios from 'axios';
import { useLocale } from '@/hooks/locale-provider';
import { useFetch } from '@/hooks/useFetch';

const Info = () => {
  const {isLoading , serverError , apiData } = useFetch('/api/about');
  console.log(apiData)

  const locale = useLocale();

  const { t } = useTranslation('common');

  return (
    <div className='w-full flex h-full flex-col bg-[#FFF] rounded-lg py-[20px] px-[20px] '>
      <Title1 title={t('info.header')} moreInfo={t('global.moreInfo')} link={`/about`} />
      {isLoading && 
        <div className='w-full flex flex-col gap-2 mt-[20px]'>
        {[...Array(5)].map((_, index) => (
          <div key={index} className='w-[100%] py-[8px] rounded-lg skeleton'></div>
        ))}
      </div>
      }

      {serverError !== null &&
        <div className='w-full min-h-[100px] flex justify-center items-center'>
          <span className='text-[gray] text-[16px]'>500 შეცდომა ინფორმაციის ჩატვირთვის დროს</span>
        </div>
      }

      {!isLoading && apiData && 
          <ul className='infoUl h-[200px] relative overflow-y-auto flex flex-col gap-3 mt-[20px] text-[13px]'>
            <li>{apiData}</li>
          </ul>
      }
    </div>
  );
};

export default Info;
