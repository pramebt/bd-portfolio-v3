import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburgerbar from "./Hamburgerbar";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "../common/ThemeSwitcher"
import NavigateDot from "./NavigateDot";

const sections = [
  "#home",
  "#about",
  "#experience",
  "#projects",
  "#contact",
];

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  useEffect(() => {
    const handleScroll = () => {
      // Only handle scroll for home page
      if (location.pathname === "/") {
        let current = "#home";
        for (const section of sections) {
          const el = document.querySelector(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
              current = section;
            }
          }
        }
        setActive(current);
      }
    };
    
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setActive(""); // Clear active state for other pages
    }
  }, [location.pathname]);

  return (
    <>
      <nav className="w-full bg-white/50 backdrop-blur-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-18 items-center">
            <Link to="/" className="flex-shrink-0 text-xl font-bold text-black">bd</Link>
            {/* desktop menu */}
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`nav-link text-black ${
                  active === "#home" ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                home
              </Link>
              <a
                href="#about"
                className={`nav-link text-black ${
                  active === "#about" ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                about
              </a>
              <a
                href="#experience"
                className={`nav-link text-black ${
                  active === "#experience" ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                experience
              </a>
              {/* Removed Projects Dropdown */}
              <a
                href="#projects"
                className={`nav-link text-black ${
                  active === "#projects" ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                projects
              </a>
              <a
                href="#contact"
                className={`nav-link text-black ${
                  active === "#contact" ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
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
                className="absolute top-18 left-0 w-full  bg-white/70 backdrop-blur-3xl  flex flex-col items-center space-y-4 py-4 md:hidden z-50"
              >
                <Link
                  to="/"
                  className={`nav-link text-black ${
                    active === "#home" ? "active" : ""
                  }`}
                >
                  home
                </Link>
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
