import React from 'react'

const projects = [
  
  {
    title: "Age Calculator",
    subtitle: "Age Calculator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi. Aenean et sem venenatis quam feugiat la augue sapien, facilisis blandit purus id, facilisis tinc.",
    img: "/assets/images/project/Age-cal.png",
    tags: ["javascript", "html", "css"],
  },
  {
    title: "Mini Todolist",
    subtitle: "Mini Todolist",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi. Aenean et sem venenatis quam feugiat la augue sapien, facilisis blandit purus id, facilisis tinc.",
    img: "/assets/images/project/mini-todolist.png",
    tags: ["javascript", "html", "css"],
  },
  {
    title: "Ticket Generator    ",
    subtitle: "Ticket Generator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipi. Aenean et sem venenatis quam feugiat la augue sapien, facilisis blandit purus id, facilisis tinc.",
    img: "/assets/images/project/ticket.png",
    tags: ["javascript", "html", "css"],
  },
  
  // เพิ่มโปรเจคอื่นๆ ได้ที่นี่
];

const ProjectMap = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg p-6 flex flex-col hover:bg-white/40 hover:shadow-xl transition-all duration-300"
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
              <h3 className="font-bold text-xl">
                {project.title}
                <span className="font-normal text-base ml-2">{project.subtitle}</span>
              </h3>
              <p className="text-gray-500 text-sm mt-2">{project.desc}</p>
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
            <a
              href="#"
              className="mt-4 font-bold text-black/80 hover:text-black underline underline-offset-4 w-fit transition-colors duration-200"
            >
              see project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectMap;