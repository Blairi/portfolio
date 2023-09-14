import React, { useContext } from 'react'

import '../styles/bg.css'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import GitHub from '../assets/github.png';
import PHP from '../assets/php.png';
import Laravel from '../assets/laravel.png';
import MySQL from '../assets/mysql.png';
import tailwind from '../assets/tailwind.png';
import reactIcon from '../assets/react.png';
import reduxIcon from '../assets/redux.png';
import java from "../assets/java.png";
import python from "../assets/python.png";

import TechnologyIcon from './ui/TechnologyIcon';
import { LangContext } from '../context/LangContext';

const Skills = () => {

  const { lang_dict } = useContext( LangContext );

  return (
    <div name='skills' className='w-full bg text-gray-300 py-36 overflow-hidden'>
      
      {/* Container */}
      <div className='mx-auto flex flex-col justify-center w-[95%] max-w-[1000px] rounded-md bg-black p-4 md:p-8'>

        <div>
          <p className='text-4xl font-bold inline border-b-4 border-purple-500'>{ lang_dict.skills.skills }</p>
          <p className='py-4'>&#47;&#47; { lang_dict.skills.subtitle }</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>

          <TechnologyIcon name={'HTML'} src={HTML}/>

          <TechnologyIcon name={'CSS'} src={CSS}/>

          <TechnologyIcon name={'JavaScript'} src={JavaScript}/>

          <TechnologyIcon name={'Tailwind'} src={tailwind}/>

          <TechnologyIcon name={'React'} src={reactIcon}/>

          <TechnologyIcon name={'Redux'} src={reduxIcon}/>
          
          <TechnologyIcon name={'GitHub'} src={GitHub}/>

          <TechnologyIcon name={'PHP'} src={PHP}/>

          <TechnologyIcon name={'Laravel'} src={Laravel}/>

          <TechnologyIcon name={'MySQL'} src={MySQL}/>

          <TechnologyIcon name={'Java'} src={java} />

          <TechnologyIcon name={'Python'} src={python} />

        </div>

      </div>

    </div>
  )
}

export default Skills