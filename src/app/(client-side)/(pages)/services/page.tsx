import ServiceCard from '@/components/cards/serviceCard'
import MaxWidthWrapper from '@/components/contentwrapper/maxWidthWrapper'
import Title1 from '@/components/title/title1'
import React from 'react'
import { createTranslation } from '@/i18n/server';
import { services } from '@/data/services'

const ServicesPage =async () => {
  const {t} = await createTranslation('common');
  return (
    <MaxWidthWrapper>

    <div className='w-full flex flex-col gap-4 mt-[20px]'>

      <div className='text-[15px]'>
        <Title1  title={t('ourservices.title')}/>
      </div>

      <div className='grid grid-cols-1 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-[12px]'>
        {services.map((item, i) => 
          <ServiceCard key={i} title={item.title_ge} image={item.image} />
        )}
  
      </div>

    </div>
    </MaxWidthWrapper>
  )
}

export default ServicesPage;