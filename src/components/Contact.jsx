import React, { useContext, useEffect, useState } from 'react'
import { LangContext } from '../context/LangContext'
import { useForm } from '../hooks/useForm'
import '../styles/bg.css'
import Email from './ui/Email'

const Contact = () => {

  const initialForm = {
    name: '',
    email: '',
    message: '',
  };

  const [ formValues, handleInputChange ] = useForm( initialForm );

  const [enable, setEnable] = useState(false);

  useEffect(() => {

    if (formValues.name.trim().length > 2 &&
        formValues.email.trim().length > 5 &&
        formValues.message.trim().length > 2 ) {

      setEnable(true);
    }
    else{
      setEnable(false);
    }
  }, [formValues])


  const { lang_dict } = useContext( LangContext );
  

  return (
    <div name='contact' className='w-full py-32 bg flex justify-center items-center'>

      <form 
        method='POST' 
        action="https://getform.io/f/69d998eb-26f7-4fc1-bfb1-365c209a1f39" 
        className='flex flex-col w-[93%] max-w-[800px] bg-black p-3 md:p-8 rounded-md'
      >

        <div className='pb-8'>

          <p className='text-4xl font-bold inline border-b-4 border-purple-500 text-gray-300'>{ lang_dict.contact.contact }</p>
          <p className='text-gray-300 py-4'>
            &#47;&#47; { lang_dict.contact.subtitle }
          </p>

          <div className='flex justify-center'>
            <Email />
          </div>
        </div>

        <input 
          className='p-2 bg-[#ccd6f6]'
          type="text"
          placeholder={ lang_dict.contact.name }
          name='name'
          value={formValues.name}
          onChange={handleInputChange}
        />

        <input 
          className='my-4 p-2 bg-[#ccd6f6]'
          type="email"
          placeholder={ lang_dict.contact.email }
          name='email'
          value={formValues.email}
          onChange={handleInputChange}
        />

        <textarea 
          className='bg-[#ccd6f6] p-2' 
          name="message" 
          rows="10" 
          placeholder={ lang_dict.contact.message }
          onChange={handleInputChange}
          value={formValues.message}
        ></textarea>

        <button
          disabled={ !enable }
          className={ 
            enable ? 
              'hover:border-purple-600 text-white font-bold text-lg border-2 px-4 py-3 my-8 mx-auto w-40 rounded-md justify-center' 
              : 'bg-gray-300 hover:border-purple-600 text-white font-bold text-lg border-2 px-4 py-3 my-8 mx-auto w-40 rounded-md justify-center' 
            }
        >{ lang_dict.buttons.send }</button>

      </form>
    </div>
  )
}

export default Contact