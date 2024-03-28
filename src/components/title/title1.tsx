import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'


interface pagePrps {
    title: String,
    link?: string ,
    image? : any,
    moreInfo? : string
}

const Title1 = ({title , link , image , moreInfo}:pagePrps) => {
  return (
    <div className='w-full flex justify-between items-center'>
        <div className='flex gap-3 items-center w-max'>
        <div className='w-[32px] h-[32px] bg-[#FBBC05] rounded-md flex justify-center items-center'>
          <Image width={18} height={18} src={image || ''} alt='1'/>
        </div>

        <span className='text-[18px] font-bold'>{title}</span>
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