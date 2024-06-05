import Image from 'next/image'
import React from 'react'
import accet2 from '../../../public/commingsoon.jpg'

const ProjectCard = () => {
  return (
    <div className='gridprjItem cursor-pointer relative flex items-center justify-center overflow-hidden'>
        <div className='absolute bottom-[10%] bg-[#e4e4e4] rounded-r-sm py-[6px] px-[20px] text-[15px] capitalize left-0 w-max h-max'>
          Project some title
        </div>
        <Image alt='1' width={350} height={300} className='w-full h-full object-cover' src={accet2}/>
    </div>
  )
}

export default ProjectCard