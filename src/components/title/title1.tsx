import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'


interface pagePrps {
    title: String,
    link?: string ,
    moreInfo? : string
}

const Title1 = ({title , link , moreInfo}:pagePrps) => {
  return (
    <div className='w-full flex justify-between items-center'>
        <div className='flex gap-[4px] w-max flex-col'>
          <span className='text-[16px] font-bold  capitalize text-color3'>{title}</span>
          <div className='max-w-[80%] h-[2px] bg-color3 block'></div>
        </div>

        {link &&
        <Link href={link}>
        <div  className='flex hover:opacity-[0.5] transition-all capitalize gap-2 items-center font-medium text-[15px]'>
            {moreInfo}
            <FaLongArrowAltRight className='text-color1'/>
        </div>
        </Link>
        }

    </div>
  )
}

export default Title1