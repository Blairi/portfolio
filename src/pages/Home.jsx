import React, { useContext } from 'react'

import '../styles/bg.css'

import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { LangContext } from '../context/LangContext';

export const Home = () => {

  const { lang_dict } = useContext(LangContext);

  return (
    <div name='home' className='w-full flex justify-center items-center min-h-screen px-3 sm:px-2 md:px-0 bg'>

      <div 
        className='flex flex-col justify-center bg-black rounded-md py-2 px-2 lg:py-10 lg:px-10'
      >

        <p className='text-purple-500 text-base font-bold'>{ lang_dict.presentation.intro }</p>
        <h1 className='text-3xl font-bold text-[#ccd6f6]'>&#60; { lang_dict.presentation.name } &#47;&#62;</h1>
        <h2 className='text-2xl font-bold text-[#8892b0]'>{ lang_dict.presentation.occupation }</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] text-lg'>
          { lang_dict.presentation.info }
        </p>

        <div >
          <Link to="work" smooth={true} duration={500} offset={-80}>
            <button
              className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
            >
              {lang_dict.buttons.projects}
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
