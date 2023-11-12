import React from 'react'

export const Email = () => {

  const data = {
    user: 'axel.montiel',
    domain: 'ieee.org',
  }

  return (
    <a
      className='text-xl text-white font-bold'
      href={'mailto:' + data.user + '@' +data.domain}
    >
      {data.user + '@' +data.domain}
    </a>
  )
}
