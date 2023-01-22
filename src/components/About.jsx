import { useContext } from 'react'
import { LangContext } from '../context/LangContext'

const About = () => {

  const { lang_dict } = useContext( LangContext );

  return (
    <div name='about' className='w-full flex items-center bg-[#102037] text-gray-300 py-36'>
      <div className='w-full grid place-items-center'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>{ lang_dict.about.about }</p>
          </div>
          <div>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div>
            <p className='sm:text-right text-4xl font-bold'>
              { lang_dict.about.intro }
            </p>
          </div>
          <div>
            <p className='text-lg'>
              { lang_dict.about.bio }
            </p>
            <a className='text-pink-600 underline text-lg font-bold' href="https://www.linkedin.com/in/axel-montiel-000848202/">
              { lang_dict.about.linkedin }
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About