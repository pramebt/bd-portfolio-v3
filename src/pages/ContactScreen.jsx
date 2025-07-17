import React, { useState } from 'react'
import Header from '../components/common/Header'

const ContactScreen = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Message:', message)
    // You can add email sending logic here
  }

  return (
    <div id='contact' className='w-full pt-20 pb-20 scroll-smooth flex flex-col items-center'>
      <Header text="contact me" />
      
      {/* Social Media Icons */}
      <div className="flex gap-6 mt-8 mb-8">
        {/* Facebook */}
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white/30 backdrop-blur-xl border border-white/20 rounded-lg hover:bg-white/50 hover:shadow-lg transition-all duration-300"
        >
          
        </a>

        {/* Instagram */}
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white/30 backdrop-blur-xl border border-white/20 rounded-lg hover:bg-white/50 hover:shadow-lg transition-all duration-300"
        >
          
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white/30 backdrop-blur-xl border border-white/20 rounded-lg hover:bg-white/50 hover:shadow-lg transition-all duration-300"
        >
          
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            className="w-full px-6 py-4 bg-white/30 backdrop-blur-xl border border-white/20 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="absolute right-2 top-2 bottom-2 px-4 bg-black/80 hover:bg-black text-white rounded-lg transition-all duration-300 flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13"></path>
              <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactScreen