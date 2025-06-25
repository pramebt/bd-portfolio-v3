import React from 'react'

const skills = [
  {
    icon: "/assets/icons/front-end.svg",
    title: "Front - end",
    items: ["JavaScript", "TypeScript", "React", "React Native", "Next.js", "Tailwind CSS"],
  },
  {
    icon: "/assets/icons/back-end.svg",
    title: "Back - end",
    items: ["Node.js", "Express", "MySQL"],
  },
  {
    icon: "/assets/icons/deploy.svg",
    title: "Deploy",
    items: ["Vercel", "Railway"],
  },
  {
    icon: "/assets/icons/tool.svg",
    title: "Tool",
    items: ["VSCode", "Figma", "Git","GitHub","Cursor"],
  },
];

const Techstack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      {skills.map((skill, idx) => (
        <div key={idx} className="flex items-center p-6 border border-gray-300 rounded-xl bg-white hover:shadow-md transition-shadow duration-300">
          <img src={skill.icon} alt={skill.title} className="w-16 h-16 mr-6 p-2 ml-2" />
          <div className="w-px bg-black mx-6 self-stretch" />
          <div>
            <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              {skill.items.map((item, i) => (
                <span key={i}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Techstack