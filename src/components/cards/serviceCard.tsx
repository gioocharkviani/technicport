import Image from 'next/image'
import React from 'react'


interface serviceProps {
  title:string, 
  image:any,
}

const ServiceCard = ({title, image} : serviceProps) => {
  return (
    <div className='service-card transition-all  h-[270px] p-[10px] rounded-xl flex items-center flex-col justify-evenly'>
        <div className='w-[150px] h-[150px] flex justify-center items-center'>
          <Image src={image} alt='' width={120} height={120} />
        </div>
        <div className='w-full flex justify-center text-center'>
          <span className='font-semibold text-[16px]'>{title}</span>
        </div>
    </div>
  )
}

export default ServiceCard