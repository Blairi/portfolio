import React from 'react'

const Email = () => {

  const data = {
    user: 'axel.avi.fer',
    domain: 'gmail.com',
  }

  return (
    <a
      className='text-2xl text-white font-bold'
      href={'mailto:' + data.user + '@' +data.domain}
    >
      {data.user + '@' +data.domain}
    </a>
  )
}

export default Email