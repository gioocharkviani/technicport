'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const ProductSwiper = ({tumb, images}:any) => {
    const [tumbImage ,setTumbImage] = useState(tumb)
  return (
    <div className='flex-[1.5] lg:flex-1  flex flex-col gap-4'>

        <div className='w-full flex  justify-center items-center whiteBoxShadow rounded-xl overflow-hidden p-[10px]'>
            <div className='w-[80%] h-[80%] flex justify-center items-center'>
                <Image className='object-contain w-[300px] h-[300px]' src={tumbImage} width={200} height={200} alt='12' />
            </div>
        </div>

        <div className='flex flex-col justify-start flex-wrap gap-3 relative'>
        {images && images.map((image:any , i:any) => 
        <div key={i} onClick={()=> setTumbImage(image.imageUrl)} className='w-[70px] cursor-pointer h-[70px] rounded-xl overflow-hidden relative whiteBoxShadow flex justify-center items-center' >
            <Image src={image.imageUrl} fill className=' object-contain' alt='12'/>
        </div>
        )}
        </div>

    </div>
  )
}

export default ProductSwiper