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
  const [activeCategory, setActiveCategory] = useState('all')

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'professional', label: 'Professional Projects' },
    { id: 'personal', label: 'Personal Projects' }
  ]

  return (
    <div id='projects' className='w-full pt-20 pb-20 scroll-smooth flex flex-col'>
      <div className='mb-8' data-aos="fade-up">
        <Header text="projects"/>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-8" data-aos="fade-up">
        <div className="flex gap-2 bg-white/30 backdrop-blur-xl border border-white/20 rounded-xl p-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-white/50 text-black shadow-sm'
                  : 'text-gray-600 hover:text-black hover:bg-white/30'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      <ProjectMap showAll={showAll} activeCategory={activeCategory} />

      {/* View All Button - Moved to bottom */}
      <div className="flex justify-center mt-8" data-aos="fade-up">
        <button
          onClick={toggleShowAll}
          className="bg-white/30 backdrop-blur-xl border border-white/20 text-black px-8 py-3 rounded-xl hover:bg-white/50 hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-medium"
        >
          {showAll ? 'Show less Projects' : 'View All Projects'}
        </button>
      </div>
      
    </div>
  )
}

export default ProjectScreen