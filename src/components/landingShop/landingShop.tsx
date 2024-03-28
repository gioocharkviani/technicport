import React from 'react'
import Title1 from '../title/title1'
import waterScooter from '../../../public/png/whaterScooter.png'
import ShopingCard from '../cards/shopingCard'
import { useTranslations } from 'next-intl'

const LandingShop = () => {
  const t = useTranslations()
  return (
    <div className="flex mt-[50px] px-[20px] rounded-lg pb-[20px] pt-[10px] bg-[#FFF]  py-[20px] flex-col"> 
        <Title1 title={t('shop.landingtitle')} moreInfo={t('global.moreInfo')} image={waterScooter} link='/shop'/>
        <div className='w-full mt-[20px] grid gap-[25px] grid-cols-1 smd:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-between'>
            <ShopingCard />
            <ShopingCard />
            <ShopingCard />
            <ShopingCard />
        </div>
    </div>
  )
}

export default LandingShop