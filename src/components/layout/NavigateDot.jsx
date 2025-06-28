import React, { useEffect, useState } from 'react';

const sections = [
  { id: "#home", label: "home" },
  { id: "#about", label: "about" },
  { id: "#experience", label: "experience" },
  { id: "#projects", label: "projects" },
  { id: "#contact", label: "contact" },
];

const NavigateDot = () => {
  const [active, setActive] = useState("#home");
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = "#home";
      for (const section of sections) {
        const el = document.querySelector(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section.id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden md:flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 z-50">
      {sections.map((section) => (
        <div
          key={section.id}
          className="relative flex items-center"
          onMouseEnter={() => setHovered(section.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <a
            href={section.id}
            className={`w-4 h-4 rounded-full transition-all duration-200 ${
              active === section.id
                ? "bg-black"
                : "bg-gray-300 opacity-60"
            } border-2 border-transparent hover:bg-gray-400`}
          />
          {/* Tooltip */}
          <span
            className={`absolute right-7 px-2 py-1 rounded-2xl bg-black text-white text-xs whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
              hovered === section.id ? "opacity-100" : "opacity-0"
            }`}
          >
            {section.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default NavigateDot;