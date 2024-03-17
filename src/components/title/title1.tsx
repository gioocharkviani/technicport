import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
interface pagePrps {
    title: String,
    link?: string 
}

const Title1 = ({title , link}:pagePrps) => {
  return (
    <div className='w-full flex justify-between items-center'>
        <div className='flex gap-3 items-center w-max'>
        <div className='w-[40px] h-[40px] bg-[#FBBC05] rounded-md flex justify-center items-center'>

        </div>
        <span className='text-[18px] font-bold'>{title}</span>
        </div>

        {link &&
        <Link href={link} className='flex hover:opacity-[0.5] transition-all capitalize gap-2 items-center font-medium text-[15px]'>
            more
            <FaLongArrowAltRight className='text-color1'/>
        </Link>
        }

    </div>
  )
}

export default Title1