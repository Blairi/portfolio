import React from 'react'

const TechnologyIcon = ({ src, name }) => {
  return (
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5 bg-[#0b0b0b]'>
      <img className='w-20 mx-auto' src={src} alt={name + ' icon'} />
      <p>{name}</p>
    </div>
  )
}

export default TechnologyIcon