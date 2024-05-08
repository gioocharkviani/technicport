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
  const locale = useLocale();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/about');
        setData(response.data);
      } catch (error) {
        console.log(error);
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
              {data? data : null}
            </div>
            <div className='flex whiteBoxShadow1 px-[20px] py-[20px] rounded-lg justify-center items-center'>
              <Image src={logo} alt={'logo'} width={800} height={800} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default AboutPage;
