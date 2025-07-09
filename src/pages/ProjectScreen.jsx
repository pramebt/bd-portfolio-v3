import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/common/Header'
import ProjectMap from '../components/project/ProjectMap'

const ProjectScreen = () => {
  return (
    <div id='projects' className='w-full pt-20 pb-20 scroll-smooth flex flex-col'>
      <div className='flex justify-between items-end mb-8'>
        <Header text="projects"/>
        <Link 
          to="/all-projects" 
          className="bg-white/30 backdrop-blur-xl border border-white/20 text-black px-6 py-2 rounded-lg hover:bg-white/50 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          View All Projects
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
      <ProjectMap />
    </div>
  )
}

export default ProjectScreen