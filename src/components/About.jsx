import React from 'react'

const about = () => {
  return (
    <div name='about' className='w-full h-screen flex items-center bg-[#102037] text-gray-300'>
      <div className='w-full grid place-items-center'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Acerca</p>
          </div>
          <div>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div>
            <p className='sm:text-right text-4xl font-bold'>
              Hola, gracias por visitar mi portafolió. Aquí un poco acerca de mí.
            </p>
          </div>
          <div>
            <p className='text-lg'>
              Estudié en una preparatoría tecnica en la que lleve la carrera de: "Tecnico en programación". Durante la preparatoría aprendí a programar desde diagramas de flujo con DFD, páginas web, hasta crear aplicaciones moviles con Java. Al concluir mis estudios en la preparatoría decidi ampliar mis conocimientos y estudié desarollo web con cursos de internet; con una buena base de programación, fue facíl para mí adaptarme. Ahora curso una ingeniería donde llevo materias de programación como estructuras de datos y demas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about