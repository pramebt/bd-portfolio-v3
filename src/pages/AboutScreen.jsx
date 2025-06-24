import React from 'react'
import Header from '../components/common/Header'


const AboutScreen = () => {
  return (
    <div id='about' className='w-full h-screen pt-20 scroll-smooth flex flex-col'>
      <Header text="about me" />
      <div className="flex flex-col md:flex-row items-center md:items-start mt-10 md:mt-20 gap-12 md:gap-24 px-4 md:px-20">
      
      <img
            src="/assets/images/profile.png"
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
        />
        <div className="gap-2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-3xl  mb-2">BANDIT KAEWNOI</h2>
          <p className="text-sm md:text-base ">
            I'm a recent graduate passionate about front-end development, eager to learn through hands-on projects and collaboration. I aim to develop my skills and contribute to impactful outcomes, preparing for a successful career as a Web Developer.
          </p>
          <button className='mt-4 bg-white text-black px-4 py-2 rounded-md border-1 border-gray-400'>RESUME</button>
        </div>
      </div>
    </div>
  )
}

export default AboutScreen