'use client'
import MaxWidthWrapper from '@/components/contentwrapper/maxWidthWrapper';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title1 from '@/components/title/title1';
import logo from '../../../../../public/logo.png';
import Image from 'next/image';
import axios from 'axios';
import { useLocale } from '@/hooks/locale-provider';

const AboutPage = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIssLoading] = useState<boolean>(true);
  const locale = useLocale();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/about');
        setData(response.data);
        setIssLoading(false);
      } catch (error) {
        console.log(error);
        setIssLoading(false);
      }
    };

    fetchData();
  }, [locale]);

  const { t } = useTranslation('common');
  return (
    <main className='h-full flex justify-center w-full flex-1 mt-[20px] '>
      <MaxWidthWrapper>
        <div className='flex flex-col'>
          <Title1 title={t('info.header')} />
          <div className='flex flex-col md:flex-row gap-[40px] mb-[50px] mt-[20px]'>
            <div className='w-full text-[13px] text-[gray]'>

            {!isLoading && data !== null &&
              <ul className='w-full h-max py-[20px] px-[10px] rounded-xl bg-white text-gray-700'>
                <li>{data}</li>
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
            {data === null && !isLoading &&
              <span>
                არ არის ინფორმაცია ჩვენ შესხებ
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
