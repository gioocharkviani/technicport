'use client'
import React, { useEffect, useState } from 'react'
import Title1 from '../title/title1'
import ShopingCard from '../cards/shopingCard'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

//Local Module
import { useTranslation } from '@/i18n/client';
import axios from 'axios';

const LandingShop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const req = await axios.get('/api/products/get');
              const data = req.data;
              setProducts(data.products);
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      };

      fetchData();
  }, []);

  const {t} = useTranslation('common');

  return (
    <div className="flex mt-[40px] px-[20px] rounded-lg pb-[20px] pt-[10px] bg-[#FFF]  py-[20px] flex-col"> 
        <Title1 title={t('shop.landingtitle')} moreInfo={t('global.moreInfo')} link='/shop'/>
        
        <div className='w-full  mt-[20px]'>

        <Swiper
        breakpoints={{
          // when window width is >= 768px
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
        className="swiper"
      >
            {products.map((product:any) => (
              <SwiperSlide  key={product.id}>
                <ShopingCard data={product}/>
              </SwiperSlide>
            ))}

      </Swiper>

        </div>
    </div>
  )
}

export default LandingShop