import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <input type="text" placeholder='Search for anything' className='w-3/6 bg-mute h-14 rounded-l-2xl border-tag border-2 px-4 focus:outline-none' />
        <button className='bg-accent-color h-14 px-6 rounded-r-2xl'>Search</button>
    </div>
  )
}

export default SearchBar