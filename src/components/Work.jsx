import React from 'react';
import WorkExample from './ui/WorkExample';

import upTask from '../assets/uptask.png';
import Devstagram from '../assets/devstagram.png'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import SASS from '../assets/sass.png';
import PHP from '../assets/php.png';
import MySQL from '../assets/mysql.png';
import tailwind from '../assets/tailwind.png';
import Laravel from '../assets/laravel.png';
import Livewire from '../assets/livewire.png';

import Railway from '../assets/railway.png';
import Heroku from '../assets/heroku.png';

const Work = () => {
  
  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-[#102037]'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl inline font-bold border-b-4 text-gray-300 border-purple-500'>Proyectos</p>
          <p className='py-4'>&#47;&#47; Proyectos donde he puesto en práctica mis conocimientos.</p>
        </div>

        {/* Container */}
        <div
          className='space-y-10'
        >

          <WorkExample
            src={upTask}
            proyect={'UpTask'}
            href='https://blairiuptask.herokuapp.com/'
            source='https://github.com/Blairi/UpTask'
            subtitle='Crea y gestiona tus proyectos.'
            desc='Proyecto con arquitectura MVC. Aplicación donde puedes crear un proyecto y crear una lista de tareas por realizar, las cuales se pueden marcar como pendientes o completas. Este proyecto esta hecho con JS vanilla, PHP vanilla y MySQL. Integre el servicio Gmail para enviar correos de verificación de cuentas y restablecimiento de password.'
            list={ ['Autenticación', 'Envio de Email', 'Actualización de DOM interactivo', 'Crear y consumir API'] }
            techs={[
              {icon: HTML, name: 'HTML'}, 
              {icon: CSS, name: 'CSS'},
              {icon: JavaScript, name: 'Javascript'},
              {icon: SASS, name: 'SASS'},
              {icon: PHP, name: 'PHP'},
              {icon: MySQL, name: 'MySQL'}
            ]}
            deploys={[
              {icon: Railway, name: 'Railway'},
              {icon: Heroku, name: 'Heroku'}
            ]}
          />

          <WorkExample
            src={Devstagram}
            proyect={'Devstagram'}
            href='https://devstagram-production-9954.up.railway.app/'
            source='https://github.com/Blairi/devstagram'
            subtitle='Inspirado en Instagram.'
            desc='Aplicación hecha con Laravel, este proyecto esta inspirado en Instagram. En él se pueden crear publicaciones, seguir personas y comentar posts. '
            list={ ['Autenticación', 'Subida de archivos', 'Interacción entre usuarios', 'Interactividad de DOM mediante livewire'] }
            techs={[
              {icon: HTML, name: 'HTML'},
              {icon: tailwind, name: 'Tailwind'},
              {icon: JavaScript, name: 'Javascript'},
              {icon: PHP, name: 'PHP'},
              {icon: Laravel, name: 'Laravel'},
              {icon: Livewire, name: 'Livewire'},
              {icon: MySQL, name: 'MySQL'}
            ]}
            deploys={[
              {icon: Railway, name: 'Railway'}
            ]}
          />

        </div>

      </div>

    </div>
  )
}

export default Work