import React from 'react'
import Header from '../components/common/Header'

const projects = [
  {
    title: "BeDigital",
    subtitle: "Social-linking Platform",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi. Aenean et sem venenatis quam feugiat la augue sapien, facilisis blandit purus id, facilisis tinc.",
    img: "/assets/images/project1.png",
    tags: ["javascript", "html", "css"],
  },
  {
    title: "Cloning Website",
    subtitle: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi. Aenean et sem venenatis quam feugiat la augue sapien, facilisis blandit purus id, facilisis tinc.",
    img: "/assets/images/project2.png",
    tags: ["javascript", "html", "css"],
  },
  {
    title: "Cloning Website",
    subtitle: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi. Aenean et sem venenatis quam feugiat la augue sapien, facilisis blandit purus id, facilisis tinc.",
    img: "/assets/images/project2.png",
    tags: ["javascript", "html", "css"],
  },
  {
    title: "Cloning Website",
    subtitle: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi. Aenean et sem venenatis quam feugiat la augue sapien, facilisis blandit purus id, facilisis tinc.",
    img: "/assets/images/project2.png",
    tags: ["javascript", "html", "css"],
  },
  // เพิ่มโปรเจคอื่นๆ ได้ที่นี่
];

const ProjectScreen = () => {
  return (
    <div id='project' className='w-full pt-20 pb-20 scroll-smooth flex flex-col'>
      <div className='flex justify-end items-end'>
        <Header text="projects"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-4">
            <img src={project.img} alt={project.title} className="w-full md:w-1/2 rounded-lg object-cover" />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl">{project.title} <span className="font-normal text-base">{project.subtitle}</span></h3>
                <p className="text-gray-500 text-sm mt-2">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-200 text-xs px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <a href="#" className="mt-4 font-bold underline underline-offset-4">see project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectScreen