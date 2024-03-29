import Image from 'next/image'
import React from 'react'

const BrandsCard = ({image}:{image:any}) => {
  return (
    <div className="h-[100px]  rounded-md flex justify-center items-center">
      <Image src={image} alt='1' width={200} height={100} className='w-[200px] object-contain'/> 
    </div>
  )
}

export default BrandsCard