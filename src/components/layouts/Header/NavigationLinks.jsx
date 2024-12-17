'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavigationLinks = () => {

    const links = [
        {
            name : 'Contents',
            path : '/Contents'
        },
        {
            name : "Channels",
            path : '/Channels'
        },
        {
            name : "Contact Us",
            path : '/Contact'
        }
    ]

    // access path name for feature integration for show active link in header
    const activePath = usePathname();

  return (
    <div className='bg-mute h-14 flex items-center px-10 rounded-xl gap-5'>
        {
            links.map((link, index) => (
                <Link href={link.path} key={index} className= {`hover:bg-accent-color px-4 py-1 rounded duration-500 ${activePath === link.path ? 'bg-accent-color' : ''}`} >{link.name}</Link>
            ))
        }
    </div>
  )
}

export default NavigationLinks