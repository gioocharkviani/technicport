import Image from 'next/image'
import React from 'react'
import accet2 from '../../../public/accet2.png'

const ProjectCard = () => {
  return (
    <div className='gridprjItem cursor-pointer hover:opacity-50 transition-all relative flex items-center justify-center overflow-hidden'>
        <Image alt='1' width={350} height={300} className='w-full h-full object-cover' src={accet2}/>
    </div>
  )
}

export default ProjectCard