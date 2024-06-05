'use client'
import React from 'react';
import Title1 from '../title/title1';
import { useTranslation } from '@/i18n/client';
import { useLocale } from '@/hooks/locale-provider';
import { useFetch } from '@/hooks/useFetch';

const Info = () => {
  const {isLoading , serverError , apiData } = useFetch({url:'/api/about'});

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
      
      {!isLoading && serverError && 
        <div className="text-center flex justify-center items-center h-full text-gray-500">
            შეცდომა პროდუქტების ჩატვირთვის დროს
        </div>
      }

      {!isLoading && apiData !==null &&    
        <ul className='infoUl h-[200px] relative overflow-y-auto flex flex-col gap-3 mt-[20px] text-[13px]'>
            <li>{apiData}</li>
        </ul>  
      }

      {!isLoading && !apiData &&    
        <ul className='h-[200px]  flex items-center justify-center gap-3 mt-[20px] text-[14px]'>
            <li>ჩვენ შესახებ ინფორმაციის ჩანაწერი ვერ მოიძებნა</li>
        </ul>  
      }

    </div>
  );
};

export default Info;
