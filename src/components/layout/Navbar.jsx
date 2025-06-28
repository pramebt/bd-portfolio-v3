import React, { useState, useEffect } from "react";
import Hamburgerbar from "./Hamburgerbar";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "../common/ThemeSwitcher"
import NavigateDot from "./NavigateDot";


const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  

  return (
    <>
      <nav className="w-full bg-white/50 backdrop-blur-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-18 items-center">
            <div className="flex-shrink-0 text-xl font-bold text-black ">bd</div>
            {/* desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className={`nav-link text-black ${
                  active === "#home" ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                home
              </a>
              <a
                href="#about"
                className={`nav-link text-black ${
                  active === "#about" ? "active" : ""
                }`}
              >
                about
              </a>
              <a href="#experience" className="nav-link text-black">
                experience
              </a>
              <a href="#projects" className="nav-link text-black">
                projects
              </a>
              <a href="#contact" className="nav-link text-black">
                contact
              </a>
            </div>
            
            <Hamburgerbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
          {/* mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobile-menu"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                transition={{ duration: 0.3 }}
                className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50"
              >
                <a
                  href="#home"
                  className={`nav-link text-black ${
                    active === "#home" ? "active" : ""
                  }`}
                >
                  home
                </a>
                <a href="#about" className="nav-link text-black">
                  about
                </a>
                <a href="#experience" className="nav-link text-black">
                  experience
                </a>
                <a href="#projects" className="nav-link text-black">
                  projects
                </a>
                <a href="#contact" className="nav-link text-black">
                  contact
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      
      <NavigateDot />
    </>
  );
};

export default Navbar;
