import React from 'react'
import '../styles/bg.css'
import Email from './ui/Email'

const Contact = () => {
  return (
    <div name='contact' className='w-full py-32 bg flex justify-center items-center'>

      <form 
        method='POST' 
        action="https://getform.io/f/69d998eb-26f7-4fc1-bfb1-365c209a1f39" 
        className='flex flex-col w-[93%] max-w-[800px] bg-black p-3 md:p-8 rounded-md'
      >

        <div className='pb-8'>

          <p className='text-4xl font-bold inline border-b-4 border-purple-500 text-gray-300'>Contacto</p>
          <p className='text-gray-300 py-4'>
            &#47;&#47; Envia el formulario de abajo ó enviame un email a
          </p>

          <div className='flex justify-center'>
            <Email />
          </div>
        </div>

        <input 
          className='p-2 bg-[#ccd6f6]'
          type="text"
          placeholder='Name'
          name='name'
        />

        <input 
          className='my-4 p-2 bg-[#ccd6f6]'
          type="email"
          placeholder='Email'
          name='email'
        />

        <textarea 
          className='bg-[#ccd6f6] p-2' 
          name="message" 
          rows="10" 
          placeholder='Message'
        ></textarea>

        <button
          className='text-white font-bold text-lg border-2 hover:bg-purple-500 hover:border-purple-600 px-4 py-3 my-8 mx-auto w-40 rounded-md justify-center'
        >Enviar</button>

      </form>
    </div>
  )
}

export default Contact