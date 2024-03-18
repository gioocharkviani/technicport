import React from 'react'
import Title2 from '../title/title2'
import projects from '../../../public/png/projects.png'
import ProjectCard from '../cards/projectCard'
import { useTranslations } from 'next-intl'

const Projects = () => {
  const t = useTranslations('project');
  return (
    <div className='mt-[40px] flex flex-col gap-7'>
        <Title2 title={t('projectTitle')} image={projects} />
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