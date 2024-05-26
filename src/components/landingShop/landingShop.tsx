'use client';
import React from 'react';
import Title1 from '../title/title1';
import ProductCard from '../cards/productCard';
import { useFetch } from '@/hooks/useFetch';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

//Local Module
import { useTranslation } from '@/i18n/client';

const LandingShop = () => {
  const {isLoading , serverError , apiData } = useFetch('/api/products/get?take=8');
  const { t } = useTranslation('common');

  return (
    <div className="flex mt-[40px] rounded-lg bg-[#FFF] py-[20px] flex-col">
      <div className="w-full px-[20px]">
        <Title1 title={t('shop.landingtitle')} moreInfo={t('global.moreInfo')} link="/shop" />
      </div>

      <div className="w-full mt-[20px] px-[10px]">

        {isLoading  &&
          <div className="w-full flex gap-4 px-[10px] justify-between min-h-[200px]">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-full h-[250px] rounded-md skeleton"></div>
            ))}
          </div>
        }

        {!isLoading && serverError && 
          <div className="col-span-full text-center text-gray-500">
            შეცდომა პროდუქტების ჩატვირთვის დროს
          </div>
        }


        {!isLoading && apiData?.products  && (
          <Swiper
          breakpoints={{
            1300: {
                slidesPerView: 5,
              },
              1000: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              500: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            freeMode={false}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="swiper1"
            >
            {apiData?.products.map((product: any) => (
              <SwiperSlide key={product.id}>
                <ProductCard data={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          )
          }
        
        
      </div>
    </div>
  );
};

export default LandingShop;
