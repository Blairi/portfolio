import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Logo from './ui/Logo';

const NavBar = () => {

  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 font-bold shadow-xl z-10'>

      <div>
        <Link className='hover:cursor-pointer' to="home" smooth={true} duration={500} >
          <Logo />
        </Link>
      </div>

      <ul className='hidden md:flex'>
        <li>
          <Link to="home" smooth={true} duration={500} >
            Inicio
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} >
            Acerca
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} >
            Habilidades
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} >
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} >
            Contacto
          </Link>
        </li>
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
          <Link onClick={handleClick} to="home" smooth={true} duration={500} >
            Inicio
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500} >
            Acerca
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
            Habilidades
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500} >
            Proyectos
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
            Contacto
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>

          <li
            className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'
          >
            <a
              href="/"
              className='flex justify-between items-center w-full text-gray-300'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li
            className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'
          >
            <a
              href="/"
              className='flex justify-between items-center w-full text-gray-300'
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li
            className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'
          >
            <a
              href="/"
              className='flex justify-between items-center w-full text-gray-300'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li
            className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'
          >
            <a
              href="/"
              className='flex justify-between items-center w-full text-gray-300'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default NavBar