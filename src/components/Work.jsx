import React from 'react';
import WorkExample from './ui/WorkExample';

import interactiveCard from '../assets/interactive-card.png';
import dashboard from '../assets/dashboard.png';
import shortly from '../assets/shortly.png';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import SASS from '../assets/sass.png';
import PHP from '../assets/php.png';
import MySQL from '../assets/mysql.png';
import tailwind from '../assets/tailwind.png';
import Laravel from '../assets/laravel.png';
import Livewire from '../assets/livewire.png';
import reactIcon from '../assets/react.png';
import ghPages from '../assets/github.png';

import Railway from '../assets/railway.png';
import Heroku from '../assets/heroku.png';

const Work = () => {
  
  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-[#102037]'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl inline font-bold border-b-4 text-gray-300 border-purple-500'>Proyectos</p>
          <p className='py-4'>Proyectos donde he puesto en práctica mis conocimientos.</p>
          <p>&#47;&#47; Más proyectos en mi <a className='text-pink-600 text-lg font-bold underline' href="https://github.com/Blairi">Github</a></p>
        </div>

        {/* Container */}
        <div
          className='space-y-10'
        >

          <WorkExample
            src={interactiveCard}
            proyect={'Interactive Card Details'}
            href='https://blairi.github.io/interactive-card/'
            source='https://github.com/Blairi/interactive-card'
            subtitle='Tarjeta interactiva'
            desc='Formulario de tarjeta bancaria con vista en tiempo real de la misma.'
            list={ ['Interactividad', 'Custom hook', 'Validación', 'Manejo de estado'] }
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

          {/* <WorkExample
            src={shortly}
            proyect={'URL shortening API landing page'}
            href='https://blairi.github.io/url-shortening/'
            source='https://github.com/Blairi/url-shortening'
            subtitle='Acortador de links'
            desc='En esta aplicación he consumido una API para generar urls apartir de una url introducida y permitiendole al usuario copiarla con un solo boton'
            list={ ['Consumo de API' ,'Interactividad', 'Custom hook', 'Validación', 'Manejo de estado'] }
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
          /> */}

          <WorkExample
            src={dashboard}
            proyect={'Time tracking dashboard'}
            href='https://blairi.github.io/time-tracking-dashboard/'
            source='https://github.com/Blairi/time-tracking-dashboard'
            subtitle='Proyecto donde puse en práctica el hook context'
            desc='En esta página es muy sencilla pero me ayudo a comprender el manejo de estado y a su vez el contexto'
            list={ ['Interactividad', 'Manejo de estado'] }
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

        </div>

      </div>

    </div>
  )
}

export default Work