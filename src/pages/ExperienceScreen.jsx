import React, { useEffect } from 'react'
import Header from '../components/common/Header'
import Arraydata from '../components/experience/Arraydata'
import AOS from "aos";
const ExperienceScreen = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false,

    });
    AOS.refresh();
  }, []);
  return (
    <div id='experience' className='w-full  pt-20 pb-20 scroll-smooth flex flex-col'>
      <Header text="experience" />
      <div className="flex justify-center items-center w-full h-full " data-aos="fade-up" >
        <div className="mt-10 w-full rounded-[2.5rem] border border-white/20 p-8 bg-white/30 backdrop-blur-xl shadow-xl" data-aos="fade-up" data-aos-delay="300">
          <Arraydata />
        </div>
      </div>
    </div>
  )
}

export default ExperienceScreen