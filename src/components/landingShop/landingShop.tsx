'use client'
import React from 'react'
import Title1 from '../title/title1'
import waterScooter from '../../../public/png/whaterScooter.png'
import ShopingCard from '../cards/shopingCard'
import { useTranslations } from 'next-intl'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const LandingShop = () => {
  const t = useTranslations()
  return (
    <div className="flex mt-[40px] px-[20px] rounded-lg pb-[20px] pt-[10px] bg-[#FFF]  py-[20px] flex-col"> 
        <Title1 title={t('shop.landingtitle')} moreInfo={t('global.moreInfo')} image={waterScooter} link='/shop'/>
        
        <div className='w-full mt-[20px]'>

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
        
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="swiper"
      >

        <SwiperSlide>
            <ShopingCard />
        </SwiperSlide>

        <SwiperSlide>
            <ShopingCard />
        </SwiperSlide>

        <SwiperSlide>
            <ShopingCard />
        </SwiperSlide>

        <SwiperSlide>
            <ShopingCard />
        </SwiperSlide>

        <SwiperSlide>
            <ShopingCard />
        </SwiperSlide>

        <SwiperSlide>
            <ShopingCard />
        </SwiperSlide>

        <SwiperSlide>
            <ShopingCard />
        </SwiperSlide>

      </Swiper>

        </div>
    </div>
  )
}

export default LandingShop