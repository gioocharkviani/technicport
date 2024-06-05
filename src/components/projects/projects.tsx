import React from 'react'
import Title1 from '../title/title1'
import ProjectCard from '../cards/projectCard'
import Image from 'next/image'
import com from '../../../public/commingsoon.jpg'


const Projects = () => {

  return (
    <div className='mt-[40px] flex bg-[#FFF] rounded-lg py-[20px] px-[20px] flex-col gap-7'>
        <Title1 title='პროექტები'  />
        <div className='w-full min-h-[300px] flex justify-center items-center'>
          <Image src={com} width={400} height={400} alt='commingsoon' />
        </div>
        {/* <div className='ProjectgridArea hidden'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div> */}
    </div>
  )
}

export default Projects