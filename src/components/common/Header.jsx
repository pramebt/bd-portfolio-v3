import React, { useEffect } from 'react'
import AOS from "aos";

const Header = ({ text }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
 }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold" data-aos="fade-up" data-aos-once="false">{text}</h1>
      <div className="mt-1 w-10 h-1 bg-black" data-aos="fade-up" data-aos-once="false"></div>
    </div>
  )
}

export default Header