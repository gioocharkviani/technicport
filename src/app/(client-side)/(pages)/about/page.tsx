'use client'
import MaxWidthWrapper from '@/components/contentwrapper/maxWidthWrapper';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Title1 from '@/components/title/title1';
import logo from '../../../../../public/logo.png';
import Image from 'next/image';
import { useFetch } from '@/hooks/useFetch';

const AboutPage = () => {
  const {isLoading , apiData , serverError} = useFetch('/api/about')

  const { t } = useTranslation('common');
  return (
    <main className='h-full flex justify-center w-full flex-1 mt-[20px] '>
      <MaxWidthWrapper>
        <div className='flex flex-col'>
          <Title1 title={t('info.header')} />
          <div className='flex flex-col md:flex-row gap-[40px] mb-[50px] mt-[20px]'>
            <div className='w-full text-[13px] text-[gray]'>

            {!isLoading && apiData !== null &&
              <ul className='w-full h-max py-[20px] px-[10px] rounded-xl bg-white text-gray-700'>
                <li>{apiData}</li>
              </ul>
            }

            <div className='w-full h-max py-[20px] px-[10px] rounded-xl bg-white'>
            {isLoading &&
              <div className='w-full flex flex-col gap-2 mt-[20px]'>
              <div className='w-[100%] py-[8px] rounded-lg skeleton'></div>
              <div className='w-[100%] py-[8px] rounded-lg skeleton'></div>
              <div className='w-[100%] py-[8px] rounded-lg skeleton'></div>
              <div className='w-[100%] py-[8px] rounded-lg skeleton'></div>
              <div className='w-[40%] py-[8px] rounded-lg skeleton'></div>
              </div>
            }

            {apiData === null && !serverError && !isLoading &&
              <span>
                არ არის ინფორმაცია ჩვენ შესხებ
              </span>
            }    

            {serverError && !isLoading &&
              <span>
                შეცდომა ინფორმაციის ჩატცირტვის დროს
              </span>
            }    
            </div>

            </div>
            <div className='flex bg-white px-[20px] py-[20px] rounded-xl justify-center items-center'>
              <Image src={logo} alt={'logo'} width={800} height={800} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default AboutPage;
