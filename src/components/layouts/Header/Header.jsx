import React from 'react'
import Logo from './Logo'
import NavigationLinks from './NavigationLinks'

const Header = () => {
  return (
    <div className='h-20 w-11/12 mx-auto flex items-center justify-between'>
        <Logo />
        <NavigationLinks />
    </div>
  )
}

export default Header