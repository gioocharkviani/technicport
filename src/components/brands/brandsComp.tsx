'use client'
import BrandsCard from "../cards/brandsCard";
import motule from '../../../public/brands/motul.png'
import solas from '../../../public/brands/solas.png'
import ngk from '../../../public/brands/ngk.png'
import quicksilver from '../../../public/brands/quicksilver.png'
import champione from '../../../public/brands/champion.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules';


const BrandsComp = () => {
  return (
    <div className="flex md:flex-row flex-col items-center overflow-hidden  gap-6 md:gap-3 mt-[40px] bg-[#272a37] rounded-lg py-[40px] px-[20px]  ">

      {/* <div className="text-[18px] w-max shrink-0 text-white pr-[30px]">დასახელება</div> */}

        <div className="flex gap-5 justify-between overflow-hidden w-full">

        <Swiper
        breakpoints={{
          1000: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          500: {
            slidesPerView: 3,
          },
          350: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={50}
        freeMode={false}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false,
        }}
        modules={[FreeMode , Autoplay]}
        className="swiper-brands"
      >

        <SwiperSlide>
            <BrandsCard  image={motule} />
        </SwiperSlide>

        <SwiperSlide>
            <BrandsCard  image={ngk} />
        </SwiperSlide>

        <SwiperSlide>
            <BrandsCard  image={solas} />
        </SwiperSlide>

        <SwiperSlide>
            <BrandsCard  image={champione} />
        </SwiperSlide>

        <SwiperSlide>
            <BrandsCard  image={quicksilver} />
        </SwiperSlide>
        
      </Swiper>

        </div>

    </div>
  )
}

export default BrandsComp;