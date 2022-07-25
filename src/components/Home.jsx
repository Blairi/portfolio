import React from 'react'

import '../styles/bg.css'

import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg '>

      {/* Container */}
      <div className='w-3/4 md:w-auto max-w-[1000px] md:mx-auto p-8 flex flex-col justify-center bg-black rounded-md'>

        <p className='text-purple-500 text-base font-bold'>Hola, mi nombre es</p>
        <h1 className='text-3xl md:text-7xl font-bold text-[#ccd6f6]'>&#60; Axel Montiel &#47;&#62;</h1>
        <h2 className='text-2xl md:text-6xl font-bold text-[#8892b0]'>Soy programador.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] text-lg'>
          Desarollador de aplicaciones web, apasionado de investigar y construir aplicaciones.
          Actualmente estudiante de ingeniería en computación, en UNAM.
        </p>

        <div >
          <Link to="work" smooth={true} duration={500} >
            <button
              className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
            >
              Ver proyectos
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Home