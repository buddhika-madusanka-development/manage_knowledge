import Logo from '@/Components/common/Logo/Logo'
import React from 'react'

// icon import form react icons
import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    <div className='h-20 w-11/12 mx-auto flex justify-between items-center'>
        <div className="logo-section">
            <Logo />
        </div>
        <div className="link-section">
            <a href={'#'}>Contents</a>
            <a href={'#'}>Channels</a>
            <a href={'#'}>Road Maps</a>
            <a href={'#'}>Contact</a>
        </div>
        <div className="ham-menu">
            <HiMenu />
        </div>

    </div>
  )
}

export default Header