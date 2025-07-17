import React from 'react'

const TextDetail = ({ header, param }) => {
  return (
    <div className=''>
      <h2 className="border-b-1 py-2 border-black text-2xl md:text-3xl mb-2">{header}</h2>
      <p className="border-b-1 pb-2 border-black text-sm md:text-base font-light">{param}</p>
    </div>
  )
}

export default TextDetail