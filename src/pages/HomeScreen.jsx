import React from 'react'
import Textcenter from '../components/hero/Textcenter'

const HomeScreen = () => {
  return (
    <div id='home' className='flex flex-col items-center justify-center h-screen '>
      <Textcenter />
      <div className="mt-8 mb-8 animate-bounce">
        {/* ลูกศรตัว v */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-black">
          <path d="M6 10l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

export default HomeScreen