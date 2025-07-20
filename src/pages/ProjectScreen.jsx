import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/common/Header'
import ProjectMap from '../components/project/ProjectMap'
import AOS from "aos";

const ProjectScreen = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false,

    });
    AOS.refresh();
  }, []);
  const [showAll, setShowAll] = useState(false)

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <div id='projects' className='w-full pt-20 pb-20 scroll-smooth flex flex-col'>
      <div className='flex justify-between items-end mb-8' data-aos="fade-up">
        <Header text="projects"/>
        <button
          onClick={toggleShowAll}
          className="bg-white/30 backdrop-blur-xl border border-white/20 text-black px-6 py-2 rounded-lg hover:bg-white/50 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          {showAll ? 'Show less Projects' : 'View All Projects'}
        </button>
      </div>
      
        <ProjectMap showAll={showAll} />
      
    </div>
  )
}

export default ProjectScreen