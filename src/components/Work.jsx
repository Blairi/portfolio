import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import WorkExample from './ui/WorkExample';

import interactiveCard from '../assets/interactive-card.png';
import shortly from '../assets/shortly.png';
import sortingAlgorithms from '../assets/sorting_algorithms.png'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import SASS from '../assets/sass.png';
// import PHP from '../assets/php.png';
// import MySQL from '../assets/mysql.png';
import tailwind from '../assets/tailwind.png';
// import Laravel from '../assets/laravel.png';
// import Livewire from '../assets/livewire.png';
import reactIcon from '../assets/react.png';
import ghPages from '../assets/github.png';
import cpp from '../assets/cpp.png';
import python from '../assets/python.png';
// import Railway from '../assets/railway.png';
// import Heroku from '../assets/heroku.png';

const Work = () => {

  const { lang_dict } = useContext( LangContext );
  
  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-[#102037]'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl inline font-bold border-b-4 text-gray-300 border-purple-500'>{ lang_dict.work.projects }</p>
          <p className='py-4'>{ lang_dict.work.subtitle }</p>
          <p>&#47;&#47; { lang_dict.work.more } <a className='text-pink-600 text-lg font-bold underline' href="https://github.com/Blairi">Github</a></p>
        </div>

        {/* Container */}
        <div
          className='space-y-10'
        >

          <WorkExample
            src={ interactiveCard }
            proyect={ lang_dict.work.interactiveCard.title }
            href='https://blairi.github.io/interactive-card/'
            source='https://github.com/Blairi/interactive-card'
            subtitle={ lang_dict.work.interactiveCard.subtitle }
            desc={ lang_dict.work.interactiveCard.desc }
            list={ lang_dict.work.interactiveCard.list }
            techs={[
              {icon: HTML, name: 'HTML'}, 
              {icon: CSS, name: 'CSS'},
              {icon: JavaScript, name: 'Javascript'},
              {icon: SASS, name: 'SASS'},
              {icon: reactIcon, name: 'React'},
            ]}
            deploys={[
              {icon: ghPages, name: 'Github Pages'},
            ]}
          />

          <WorkExample
            src={ shortly }
            proyect={ lang_dict.work.shortly.title }
            href='https://blairi.github.io/url-shortening/'
            source='https://github.com/Blairi/url-shortening'
            subtitle={ lang_dict.work.shortly.subtitle }
            desc={ lang_dict.work.shortly.desc }
            list={ lang_dict.work.shortly.list }
            techs={[
              {icon: HTML, name: 'HTML'}, 
              {icon: CSS, name: 'CSS'},
              {icon: JavaScript, name: 'Javascript'},
              {icon: reactIcon, name: 'React'},
              {icon: tailwind, name: 'Tailwind'},
            ]}
            deploys={[
              {icon: ghPages, name: 'Github Pages'},
            ]}
          />

          <WorkExample
            src={ sortingAlgorithms }
            proyect={ lang_dict.work.sortingAlgorithms.title }
            href='https://github.com/Blairi/sorting-algorithms'
            source='https://github.com/Blairi/sorting-algorithms'
            subtitle={ lang_dict.work.sortingAlgorithms.subtitle }
            desc={ lang_dict.work.sortingAlgorithms.desc }
            list={ lang_dict.work.sortingAlgorithms.list }
            techs={[
              {icon: cpp, name: 'C++'},
              {icon: python, name: 'Python'},
            ]}
          />

        </div>

      </div>

    </div>
  )
}

export default Work