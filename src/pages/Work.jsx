import { useContext } from 'react';
import { LangContext } from '../context/LangContext';


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
import { WorkExample } from '../components/ui';
// import Railway from '../assets/railway.png';
// import Heroku from '../assets/heroku.png';

export const Work = () => {

  const { lang_dict } = useContext( LangContext );
  
  return (
    <div name='work' className='min-h-screen grid place-items-center bg-[#102037] py-10'>

      <div className='custom-container mx-auto text-gray-300'>

        <div className='pb-8'>

          <p className='text-4xl inline font-bold border-b-4 border-purple-500'>{ lang_dict.work.projects }</p>
          <p className='py-4'>{ lang_dict.work.subtitle }</p>
          <p>&#47;&#47; { lang_dict.work.more } <a className='text-pink-600 text-lg font-bold underline' href="https://github.com/Blairi">Github</a></p>

        </div>

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
