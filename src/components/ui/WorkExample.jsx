import React, { useContext } from 'react'
import { LangContext } from '../../context/LangContext'

const WorkExample = ({ src, proyect, href, source, subtitle, desc, list, techs, deploys = [] }) => {

  const { lang_dict } = useContext( LangContext );

  return (
    <div className='md:flex md:gap-5 space-y-5 md:space-y-0'>
      <div className='md:w-1/3 flex items-center'>
        <div
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          style={{ backgroundImage: `url(${src})` }}
        >

          {/* Hover effect */}
          <div className='opacity-0 group-hover:opacity-100 duration-100'>

            <span className='text-2xl font-bold text-white tracking-wider'>
              {proyect}
            </span>

            <div className='pt-8 text-center'>
              <a href={href} target='_blank' rel="noopener noreferrer">
                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
              </a>
              <a href={source} target='_blank' rel="noopener noreferrer">
                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
              </a>
            </div>

          </div>
        </div>
      </div> {/* Image */}

      <div className='md:w-2/3'>
        <h3 className='text-2xl font-bold border-b-4 inline border-purple-500'>{proyect}</h3>
        <h4 className='text-lg mb-3'>{subtitle}</h4>
        <p>{desc}</p>
        <p className='font-bold text-lg text-purple-500'>{ lang_dict.workExample.includes }</p>
        <div className='flex text-lg flex-wrap'>
          {
            list.map( ( item, index ) => {
              return <li 
                        key={ index }
                        className='cursor-default'
                      >
                        { item }
                      </li>
            })
          }
        </div>
        <p className='font-bold text-lg text-purple-500'>{ lang_dict.workExample.techs }</p>
        <div className='flex flex-wrap space-x-4 space-y-1'>
          {
            techs.map( ( item, index ) => {

              const { icon, name } = item;

              return <div 
                        key={ index }
                        className='cursor-default flex space-x-2'
                      >

                        <div className='w-[30px]'>
                          <img src={icon} alt={name} />
                        </div>

                        <div className='flex items-center'>
                          {name}
                        </div>

                      </div>
            })
          }
        </div>
        <p className='font-bold text-lg text-purple-500 mt-2'>{ lang_dict.workExample.deployed }</p>
        <div className='flex flex-wrap space-x-4'>
          {
            deploys.map( ( item, index ) => {

              const { icon, name } = item;

              return <div 
                        key={ index }
                        className='cursor-default flex space-x-2'
                      >

                        <div className='w-[30px]'>
                          <img src={icon} alt={name} />
                        </div>

                        <div className='flex items-center'>
                          {name}
                        </div>

                      </div>
            })
          }
        </div>
      </div>

    </div>
  )
}

export default WorkExample