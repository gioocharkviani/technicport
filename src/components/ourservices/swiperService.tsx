'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const SwiperService = () => {
  return (
    <div className='w-full h-full rounded-lg overflow-hidden'>
    <Swiper
    slidesPerView={1}
    centeredSlides={false}
    slidesPerGroupSkip={1}
    grabCursor={true}
    keyboard={{
      enabled: true,
    }}
    // breakpoints={{
    //   769: {
    //     slidesPerView: 1,
    //     slidesPerGroup: 1,
    //   },
    // }}
    scrollbar={true}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
    className="w-full h-full"
  >
    <SwiperSlide>
      <div className='w-full h-full bg-[#f1f1f1]'>

      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='w-full h-full bg-[#f1f1f1]'>

      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='w-full h-full bg-[#f1f1f1]'>

      </div>
    </SwiperSlide>

  </Swiper>
    </div>
  )
}

export default SwiperService