import React, { useEffect, useState } from "react";
import AOS from "aos";
import { div } from "framer-motion/client";
const projects = [
  {
    title: "Age Calculator",
    subtitle: "personal project",
    desc: "Calculate age from day, month, year (AD) Responsive for mobile and pc",
    img: "/assets/images/project/Age-cal.png",
    tags: ["Nextjs", "Tailwind", "Typescript"],
    link: "https://age-calculator-bd.vercel.app/",
    github: "https://github.com/pramebt/age-calculator",
  },
  {
    title: "BLOD - Webblog",
    subtitle: "personal project",
    desc: "This website is designed for writing and managing blog posts,allowing users to create content flexibly using a block-based structure such as headers, paragraphs, code blocks, and images. This gives users the freedom to organize and customize their content with ease. In addition to creating blog posts, users can also save and manage multiple projects within the system, making it ideal for organizing writing tasks or development-related projects. This project was developed to practice building complex React applications, handling dynamic and flexible form structures, integrating with a backend system, uploading files to Cloudinary, and storing structured data in a real database.",
            
    img: "/assets/images/project/Blod.png",
    tags: ["React", "Tailwind", "Nodejs", "Express","Mysql","TiDB"],
    link: "https://blog-bd.vercel.app/",
    github: "https://github.com/pramebt/webblogbd",
  },
  {
    title: "Weather App",
    subtitle: "personal project",
    desc: "Weather App for checking weather of any city",
    img: "/assets/images/project/Weather.png",
    tags: ["React", "Tailwind", "Javascript"],
    link: "https://weather-app-by-bd.vercel.app/",
    github: "https://github.com/pramebt/weather-app",
  },
  {
    title: "Portfolio",
    subtitle: "personal project",
    desc: "Portfolio website for myself",
    img: "/assets/images/project/portv3.png",
    tags: ["Nextjs", "Tailwind", "Typescript"],
    link: "https://bd-portfolio-real.vercel.app/",
  },
  {
    title: "Todolist",
    subtitle: "personal project",
    desc: "Todo List for managing tasks with Local Storage persistence. Supports add/edit/delete.",
    img: "/assets/images/project/Todolist.png",
    tags: ["React", "Tailwind", "Javascript"],
    link: "https://react-todolist01.vercel.app/",
    github: "https://github.com/pramebt/study-react-todolist01",
  },
  {
    title: "Ticket",
    subtitle: "personal project",
    desc: "Generate ticket for yourself",
    img: "/assets/images/project/ticket.png",
    tags: ["React", "Tailwind", "Javascript"],
    link: "https://ticket-generate-bd.vercel.app/",
    github: "https://github.com/pramebt/ticket-generate-bd",
  },

];

const ProjectMap = ({ showAll = false }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {displayedProjects.map((project, idx) => (
        <div className="rounded-xl hover:bg-white/40 hover:shadow-xl transition-all duration-300">
        <div
          key={idx}
          className="h-full bg-white/30 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg p-6 flex flex-col "
          data-aos="fade-up"
        >
          {/* Image */}
          <div className="aspect-[16/9] w-full bg-white/20 backdrop-blur rounded-xl overflow-hidden shadow-sm mb-4">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Details */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl">{project.title}</h3>
              <span className="font-normal text-base ">{project.subtitle}</span>
              <p className="text-gray-500 text-sm mt-2">
                {project.desc.length > 40
                  ? `${project.desc.substring(0, 40)}...` 
                  : project.desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white/30 backdrop-blur text-xs px-2 py-1 rounded border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => openModal(project)}
              className="mt-4 font-bold text-black/80 hover:text-black underline underline-offset-4 w-fit transition-colors duration-200 cursor-pointer"
            >
              see project
            </button>
          </div>
        </div>
        </div>
      ))}
    </div>

    {/* Modal */}
    {isModalOpen && selectedProject && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Modal Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h2>
            <span className="text-gray-500 text-sm">{selectedProject.subtitle}</span>
            </div>
            
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold transition-colors duration-200"
            >
              ×
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {/* Project Image */}
            <div className="aspect-[16/9] w-full bg-gray-100 rounded-xl overflow-hidden mb-6">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <div>
                
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {selectedProject.desc}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 text-black px-6 py-2 rounded-lg shadow-sm hover:bg-white transition-colors duration-200 font-medium"
                >
                  View Live
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/90 text-white px-6 py-2 rounded-lg shadow-sm hover:bg-black transition-colors duration-200 font-medium"
                >
                  Github
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default ProjectMap;
