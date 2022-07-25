import React from 'react'

import '../styles/bg.css'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import GitHub from '../assets/github.png';
import PHP from '../assets/php.png';
import Laravel from '../assets/laravel.png';
import Livewire from '../assets/livewire.png';
import MySQL from '../assets/mysql.png';
import SASS from '../assets/sass.png';
import tailwind from '../assets/tailwind.png';

import TechnologyIcon from './ui/TechnologyIcon';

const Skills = () => {
  return (
    <div name='skills' className='w-full bg text-gray-300 min-h-[120vh] md:min-h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-11/12 md:w-full rounded-md bg-black'>

        <div>
          <p className='text-4xl font-bold inline border-b-4 border-purple-500'>Habilidades</p>
          <p className='py-4'>&#47;&#47; Aquí algunas de las tecnologías con las que he trabajado.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

          <TechnologyIcon name={'HTML'} src={HTML}/>

          <TechnologyIcon name={'CSS'} src={CSS}/>

          <TechnologyIcon name={'JavaScript'} src={JavaScript}/>

          <TechnologyIcon name={'GitHub'} src={GitHub}/>

          <TechnologyIcon name={'PHP'} src={PHP}/>

          <TechnologyIcon name={'Laravel'} src={Laravel}/>

          <TechnologyIcon name={'Livewire'} src={Livewire}/>

          <TechnologyIcon name={'MySQL'} src={MySQL}/>

          <TechnologyIcon name={'SASS'} src={SASS}/>

          <TechnologyIcon name={'Tailwind'} src={tailwind}/>

        </div>

      </div>

    </div>
  )
}

export default Skills