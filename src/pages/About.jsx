import { useContext } from 'react';
import { LangContext } from '../context/LangContext';

export const About = () => {

  const { lang_dict } = useContext( LangContext );

  return (
    <div name='about' className='min-h-screen flex items-center justify-center bg-[#102037] text-gray-300 px-3'>

      <div className='container xl:px-0 grid place-items-center'>

        <div className='grid grid-cols-2 gap-8'>

          <div className='sm:text-right pb-8 pl-4'>
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
            <p className=''>
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
