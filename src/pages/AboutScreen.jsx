import React from 'react'
import Header from '../components/common/Header'
import Techstack from '../components/about/Techstack'
import TextDetail from '../components/about/TextDetail'

const AboutScreen = () => {
  return (
    <div id='about' className='w-full pt-20 pb-20 scroll-smooth flex flex-col'>
      <Header text="about me" />
      <div className="w-full flex flex-col md:flex-row items-center md:items-center  ">
        
        <div className='w-1/2  p-5 flex justify-center'>
        <img
            src="/assets/images/profile.png"
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
        />
        </div>
        <div className="gap-2 w-full flex flex-col items-center md:items-start text-center md:text-left">
          <TextDetail
            header="BANDIT KAEWNOI"
            param="I'm a recent graduate passionate about front-end development, eager to learn through hands-on projects and collaboration. I aim to develop my skills and contribute to impactful outcomes, preparing for a successful career as a Web Developer."
          />
          <button class="btn w-64 rounded-full">Button</button>
        </div>
      </div>
      <Techstack />
    </div>
  )
}

export default AboutScreen