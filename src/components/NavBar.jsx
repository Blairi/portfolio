import React, { useContext, useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll';
import { LangContext } from '../context/LangContext';
import { LangSwitch } from './ui/LangSwitch';
import Logo from './ui/Logo';
import { Scrollbutton } from './ui';

const offset = -80;
const duration = 500;

const NavBar = () => {

  const { lang_dict } = useContext( LangContext );

  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed top-0 left-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 font-bold shadow-xl z-10'>

      <div>
        <Link className='hover:cursor-pointer' to="home" smooth={true} duration={duration} offset={offset}>
          <Logo />
        </Link>
      </div>

      <ul className='hidden md:flex md:items-center md:gap-5'>
        <li>
          <Scrollbutton 
            label={ lang_dict.navbar.home } 
            to="home" 
            duration={duration} 
            offset={offset}
          />
        </li>
        <li>
          <Scrollbutton 
            label={ lang_dict.navbar.about } 
            to="about" 
            duration={duration} 
            offset={offset}
          />
        </li>
        <li>
          <Scrollbutton 
            label={ lang_dict.navbar.skills } 
            to="skills" 
            duration={duration} 
            offset={offset}
          />
        </li>
        <li>
          <Scrollbutton 
            label={ lang_dict.navbar.projects } 
            to="work" 
            duration={duration} 
            offset={offset}
          />
        </li>
        <li>
          <Scrollbutton 
            label={ lang_dict.navbar.contact } 
            to="contact" 
            duration={duration} 
            offset={offset}
          />
        </li>

        <LangSwitch />

      </ul>

      {/* Hamburguer */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}
      >
        <li className='py-4 text-4xl'>
          <Scrollbutton 
            label={ lang_dict.navbar.home } 
            to="home" 
            duration={duration} 
            offset={offset}
            onClick={handleClick}
          />
        </li>
        <li className='py-4 text-4xl'>
          <Scrollbutton 
            label={ lang_dict.navbar.about } 
            to="about" 
            duration={duration} 
            offset={offset}
            onClick={handleClick}
          />
        </li>
        <li className='py-4 text-4xl'>
          <Scrollbutton 
            label={ lang_dict.navbar.skills } 
            to="skills" 
            duration={duration} 
            offset={offset}
            onClick={handleClick}
          />
        </li>
        <li className='py-4 text-4xl'>
          <Scrollbutton 
            label={ lang_dict.navbar.skills } 
            to="work" 
            duration={duration} 
            offset={offset}
            onClick={handleClick}
          />
        </li>
        <li className='py-4 text-4xl'>
          <Scrollbutton 
            label={ lang_dict.navbar.contact } 
            to="contact" 
            duration={duration} 
            offset={offset}
            onClick={handleClick}
          />
        </li>

        <div className='mt-5'>
          <LangSwitch />
        </div>

      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>

          <li
            className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'
          >
            <a
              href="https://www.linkedin.com/in/axel-montiel-000848202/"
              className='flex justify-between items-center w-full text-gray-300'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li
            className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'
          >
            <a
              href="https://github.com/Blairi"
              className='flex justify-between items-center w-full text-gray-300'
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default NavBar