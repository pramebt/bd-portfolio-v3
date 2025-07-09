import React from 'react'
import Header from '../components/common/Header'
import Arraydata from '../components/experience/Arraydata'

const ExperienceScreen = () => {
  return (
    <div id='experience' className='w-full min-h-screen pt-20 pb-20 scroll-smooth flex flex-col'>
      <Header text="experience" />
      <div className="flex justify-center items-center w-full h-full ">
        <div className="mt-10 w-full rounded-[2.5rem] border border-white/20 p-8 bg-white/30 backdrop-blur-xl shadow-xl">
          <Arraydata />
        </div>
      </div>
    </div>
  )
}

export default ExperienceScreen