import React from 'react'

const TextDetail = ({ header, param }) => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl mb-2">{header}</h2>
      <p className="text-sm md:text-base font-light">{param}</p>
    </div>
  )
}

export default TextDetail