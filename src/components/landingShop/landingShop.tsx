'use client';
import React, { useEffect, useState } from 'react';
import Title1 from '../title/title1';
import ProductCard from '../cards/productCard';
import axios from 'axios';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

//Local Module
import { useTranslation } from '@/i18n/client';

const LandingShop = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await axios.get('/api/products/get?take=8');
        const data = req.data;
        setProducts(data.products);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const { t } = useTranslation('common');


  return (
    <div className="flex mt-[40px] rounded-lg bg-[#FFF] py-[20px] flex-col">
      <div className="w-full px-[20px]">
        <Title1 title={t('shop.landingtitle')} moreInfo={t('global.moreInfo')} link="/shop" />
      </div>

      <div className="w-full mt-[20px] px-[10px]">
        {isLoading ? (
          <div className="w-full flex gap-4 px-[10px] justify-between min-h-[200px] ">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-full h-[250px] rounded-md skeleton"></div>
            ))}
          </div>
        ) : products.length > 0 ? (
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
            className="swiper1"
          >
            {products.map((product:any) => (
              <SwiperSlide key={product.id}>
                <ProductCard data={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div>There are no products available.</div>
        )}
      </div>
    </div>
  );
};

export default LandingShop;
