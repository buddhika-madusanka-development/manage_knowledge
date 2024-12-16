import React from 'react'
import Link from 'next/link'

const NavigationLinks = () => {

    const links = [
        {
            name : 'Contents',
            path : '/contents'
        },
        {
            name : "Channels",
            path : '/channels'
        },
        {
            name : "Contact Us",
            path : '/contact'
        }
    ]
    
  return (
    <div className='bg-mute h-14 flex items-center px-10 rounded-xl gap-5'>
        {
            links.map((link, index) => (
                <Link href={link.path} key={index} className='hover:bg-accent-color px-4 py-1 rounded duration-500' >{link.name}</Link>
            ))
        }
    </div>
  )
}

export default NavigationLinks