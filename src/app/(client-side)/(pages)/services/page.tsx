import ServiceCard from '@/components/cards/serviceCard'
import MaxWidthWrapper from '@/components/contentwrapper/maxWidthWrapper'
import Title1 from '@/components/title/title1'
import React from 'react'

const ServicesPage = () => {
  return (
    <MaxWidthWrapper>

    <div className='w-full flex flex-col gap-4 mt-[20px]'>

      <div className='text-[15px]'>
        <Title1 title='our services'/>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-[12px]'>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>

    </div>
    </MaxWidthWrapper>
  )
}

export default ServicesPage;