import React from 'react'

const Hamburgerbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <button
      className="md:hidden flex flex-col justify-center items-center"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
    >
      <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
      <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
      <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
    </button>
  )
}

export default Hamburgerbar