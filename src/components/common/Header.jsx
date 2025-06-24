import React from 'react'

const Header = ({ text }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{text}</h1>
      <div className="mt-1 w-10 h-1 bg-black"></div>
    </div>
  )
}

export default Header