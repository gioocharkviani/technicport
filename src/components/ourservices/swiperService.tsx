'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import engineRepair from '../../../public/services/engineRepair.png'
import propeler from '../../../public/services/propeler.png'
import key from '../../../public/services/keyPrograming.png'
import supercharger from '../../../public/services/supercharger.png'

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
    scrollbar={true}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
    className="w-full h-full"
  >
    <SwiperSlide>
      <div className='w-full h-full flex justify-center gap-3 items-center'>
        <div className='w-[80%] h-full flex gap-5 justify-center items-center'>

          <div className='w-[100px] h-[100px] flex justify-center  shrink-0 items-center'>
            <Image src={engineRepair} alt='engine repair' width={100} height={100} />
          </div>

          <div className='w-full flex gap-2 h-[100px] flex-col '>
            <h2 className='text-gray text-[18px] font-bold'>
              ძრავის შეკეთება
            </h2>
            <span className='text-gray text-[16px]'>
              ძრავის შემოწმება და ნებისმიერი დაზიანების აღმოფხვრა.
            </span>
          </div>

        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='w-full h-full flex justify-center gap-3 items-center'>
        <div className='w-[80%] h-full flex gap-5 justify-center items-center'>

          <div className='w-[100px] h-[100px] flex justify-center  shrink-0 items-center'>
            <Image src={propeler} alt='propeler' width={100} height={100} />
          </div>

          <div className='w-full flex gap-2 h-[100px] flex-col '>
            <h2 className='text-gray text-[18px] font-bold'>
              წევის ხრახნის შეცვლა
            </h2>
            <span className='text-gray text-[16px]'>
              დაზიანებული წევის ხრახნის შეცვლა ახლით ან არესებულის შეკეთება.
            </span>
          </div>

        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='w-full h-full flex justify-center gap-3 items-center'>
        <div className='w-[80%] h-full flex gap-5 justify-center items-center'>

          <div className='w-[100px] h-[100px] flex justify-center  shrink-0 items-center'>
            <Image src={key} alt='key' width={100} height={100} />
          </div>

          <div className='w-full flex gap-2 h-[100px] flex-col '>
            <h2 className='text-gray text-[18px] font-bold'>
              გასაღების პროგრამირება
            </h2>
            <span className='text-gray text-[16px]'>
              გასაღების პროგრამირება BRP , Yamaha და სხვა წამყვანი ბრენდის ტექნიკისთვის.
            </span>
          </div>

        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='w-full h-full flex justify-center gap-3 items-center'>
        <div className='w-[80%] h-full flex gap-5 justify-center items-center'>

          <div className='w-[100px] h-[100px] flex justify-center  shrink-0 items-center'>
            <Image src={supercharger} alt='supercharger' width={100} height={100} />
          </div>

          <div className='w-full flex gap-2 h-[100px] flex-col '>
            <h2 className='text-gray text-[18px] font-bold'>
              სუპერდამტენის შეკეთება
            </h2>
            <span className='text-gray text-[16px]'>
              სუპერდამენის ან ტურბინის შეკეთება შეცვლა .
            </span>
          </div>

        </div>
      </div>
    </SwiperSlide>



  </Swiper>
    </div>
  )
}

export default SwiperService