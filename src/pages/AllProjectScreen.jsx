import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/common/Header'

const projects = [
  {
    title: "Age Calculator",
    subtitle: "Age Calculator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi. Aenean et sem venenatis quam feugiat la augue sapien, facilisis blandit purus id, facilisis tinc.",
    img: "/assets/images/project/Age-cal.png",
    tags: ["javascript", "html", "css"],
    link: "#"
  },
  {
    title: "Mini Todolist",
    subtitle: "Mini Todolist",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi. Aenean et sem venenatis quam feugiat la augue sapien, facilisis blandit purus id, facilisis tinc.",
    img: "/assets/images/project/mini-todolist.png",
    tags: ["javascript", "html", "css"],
    link: "#"
  },
  {
    title: "Ticket Generator",
    subtitle: "Ticket Generator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi. Aenean et sem venenatis quam feugiat la augue sapien, facilisis blandit purus id, facilisis tinc.",
    img: "/assets/images/project/ticket.png",
    tags: ["javascript", "html", "css"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    subtitle: "Portfolio Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi. Aenean et sem venenatis quam feugiat la augue sapien, facilisis blandit purus id, facilisis tinc.",
    img: "/assets/images/project/portfolio.png",
    tags: ["react", "tailwindcss", "javascript"],
    link: "#"
  },
  // เพิ่มโปรเจคอื่นๆ ได้ที่นี่
];

const AllProjectScreen = () => {
  return (
    <div className='w-full min-h-screen pt-20 pb-20 scroll-smooth flex flex-col'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header with back button */}
        <div className='flex justify-between items-center mb-8'>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link>
          <Header text="All Projects" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/9] w-full bg-gray-100 rounded-xl overflow-hidden shadow mb-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl">
                    {project.title}
                    <span className="font-normal text-base ml-2 text-gray-600">{project.subtitle}</span>
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">{project.desc}</p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Project Link */}
                <a
                  href={project.link}
                  className="mt-4 font-bold underline underline-offset-4 w-fit hover:text-blue-600 transition-colors"
                >
                  see project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if no projects */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-600 mb-4">No projects available</h3>
            <p className="text-gray-500">Check back later for new projects!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllProjectScreen 