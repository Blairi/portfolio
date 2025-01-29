import { useContext } from 'react';
import { LangContext } from '../context/LangContext';

export const About = () => {

  const { lang_dict } = useContext( LangContext );

  return (
    <div name='about' className='min-h-screen flex items-center justify-center bg-[#102037] text-gray-300 px-3'>

      <div className='custom-container'>

        <div className='sm:grid sm:grid-cols-2 md:gap-8'>

          <div className='pb-8 sm:text-right'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              { lang_dict.about.about }
            </p>
          </div>

          <div>
          </div>

        </div>

        <div className='grid sm:grid-cols-2 gap-8'>
          <div>
            <p className='sm:text-right text-xl font-bold'>
              { lang_dict.about.intro }
            </p>
          </div>
          <div>
            <p>
              { lang_dict.about.bio }
            </p>
            <a className='text-pink-600 underline font-bold' href="https://www.linkedin.com/in/axel-montiel/">
              { lang_dict.about.linkedin }
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}
