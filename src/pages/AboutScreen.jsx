import React, { useEffect } from 'react'
import Header from '../components/common/Header'
import Techstack from '../components/about/Techstack'
import TextDetail from '../components/about/TextDetail'
import AOS from "aos";

const AboutScreen = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false
    });
    AOS.refresh();
  }, []);

  return (
    <div id='about' className='w-full pt-20 pb-20 scroll-smooth flex flex-col'>
        <Header text="about me" />
      <div className="w-full flex flex-col md:flex-row items-center md:items-center">
        <div className='w-1/2 p-5 flex justify-center' data-aos="fade-up">
          <img
            src="/assets/images/profile.png"
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <div data-aos="fade-up"  className="group gap-2 w-full flex flex-col items-center md:items-start text-center md:text-left" >
          <TextDetail
            header="BANDIT KAEWNOI"
            param="I'm a recent graduate passionate about front-end development, eager to learn through hands-on projects and collaboration. I aim to develop my skills and contribute to impactful outcomes, preparing for a successful career as a Web Developer."
          />
          <div className='flex items-center justify-center gap-2  w-42 rounded-full text-center bg-white/30 backdrop-blur-xl border border-white/20 text-black text-lg font-semibold py-3 shadow-sm hover:shadow-xl hover:bg-white/40 transition-all duration-300'>
          <a 
            href="/assets/BD RESUME.pdf" 
            download 
            className='w-full flex items-center justify-center gap-2'
            
          >
            <img src="/assets/icons/downloading.png" alt="download" className='w-6 h-6' />
            Resume
          </a>
          </div>
        </div>
      </div>
      
      <div data-aos="fade-up">
        <Techstack />
      </div>
    </div>
  )
}

export default AboutScreen