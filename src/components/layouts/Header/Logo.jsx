import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Link href={'/'}>
            <h1 className='text-xl font-bold'>Manage<span className='text-primary'>Knowledge</span></h1>
        </Link>
    </div>
  )
}

export default Logo