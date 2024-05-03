'use client'
import React, { useState, useEffect } from 'react';
import Title1 from '../title/title1';
import { useTranslation } from '@/i18n/client';
import axios from 'axios';
import { useLocale } from '@/hooks/locale-provider';

// Define a type for your data
type Data = {
  [key: string]: string | number; // Assuming all values are either string or number
};

const Info: React.FC = () => {
  const [data, setData] = useState<Data | null>(null); // Use the defined type here
  const locale = useLocale();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Data>('/api/about'); // Specify the response type as Data
        setData(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null); // Set data to null in case of error
      }
    };

    fetchData();
  }, [locale]); 

  const { t } = useTranslation('common');

  return (
    <div className='w-full flex h-full flex-col bg-[#FFF] rounded-lg py-[20px] px-[20px] '>
      <Title1 title={t('info.header')} moreInfo={t('global.moreInfo')} link={`/about`} />
      <ul className='infoUl px-[20px] md:px-[0] h-[200px] relative overflow-y-auto flex flex-col gap-3 mt-[20px] text-[13px]'>
        {data ? (
          // Render each property of the data object separately
          Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <strong>{key}: </strong>{value}
            </li>
          ))
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </div>
  );
};

export default Info;
