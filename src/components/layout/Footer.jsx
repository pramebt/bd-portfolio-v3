import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full rounded-t-3xl bg-black/90  backdrop-blur-xl text-gray-300 py-6 md:px-20 px-5  ">
       <div className='flex flex-row items-center justify-center mb-5'>
       <Link to="/" className="flex-shrink-0 text-xl font-bold text-white">bd</Link>
       </div>
      <div className='bg-white w-full h-[1px] px-10'></div>
      <div className="w-full mt-5  flex flex-col md:flex-row items-center justify-between">
        
        {/* Copyright */}
        <p className="text-white text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} BD. All rights reserved.
        </p>
        
        {/* Contact info */}
        <div className="flex flex-col   space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
          <a href="tel:+66994594970" className="text-white flex flex-row gap-3 hover:text-white">
            <img
              src="/assets/icons/Phone.svg" 
              alt="phone"
              width={16}
              height={16}
              className='w-4'
            />
            +66 99 459 4970
          </a>
          <a href="mailto:bdforwk@gmail.com" className="text-white flex flex-row gap-3 hover:text-white">
            <img
              src="/assets/icons/Gmail.svg" 
              alt="email"
              width={16}
              height={16}
              className='w-4'
            />
            bdforwk@gmail.com
          </a>
        </div>
        {/* Social media links */}
        <div className="flex space-x-4 mt-4 md:mt-0 bg-white backdrop-blur-xl px-4 py-4 rounded-3xl">
          
          <a href="https://www.facebook.com/bandit.prame/" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/icons/facebook.png" 
              alt="Facebook"
              width={16}
              height={16}
              className='w-8'
            />
          </a>
          <a href="https://www.instagram.com/prame.bt/" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/icons/instagram.png" 
              alt="Instagram"
              width={16}
              height={16}
              className='w-8'
            />
          </a>
          <a href="https://github.com/pramebt" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/icons/github.png" 
              alt="LinkedIn"
              width={16}
              height={16}
              className='w-8'
            />
          </a>
          </div>
      </div>
    </footer>
  )
}

export default Footer