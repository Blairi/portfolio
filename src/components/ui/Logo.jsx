import React from 'react'
import blairi_brand from '../../assets/blairi_brand.png'

const Logo = () => {

  const styles = {
    width: '100px',
    filter: 'invert(100%)'

  }

  return (
    <>
      <img src={blairi_brand} alt="personal-brand" style={styles} />
    </>
  )
}

export default Logo