import React from 'react'
import Header from '../components/common/Header'
import ProjectMap from '../components/project/ProjectMap'

const ProjectScreen = () => {
  return (
    <div id='projects' className='w-full pt-20 pb-20 scroll-smooth flex flex-col'>
      <div className='flex justify-end items-end'>
        <Header text="projects"/>
      </div>
      <ProjectMap />
    </div>
  )
}

export default ProjectScreen