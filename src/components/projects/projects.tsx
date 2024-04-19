import React from 'react'
import Title1 from '../title/title1'
import ProjectCard from '../cards/projectCard'


const Projects = () => {

  return (
    <div className='mt-[40px] flex bg-[#FFF] rounded-lg py-[20px] px-[20px] flex-col gap-7'>
        <Title1 title='პროექტები'  />
        <div className='ProjectgridArea'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </div>
  )
}

export default Projects