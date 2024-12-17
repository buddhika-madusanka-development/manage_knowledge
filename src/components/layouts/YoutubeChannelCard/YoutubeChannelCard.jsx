import Image from 'next/image'
import React from 'react'

const YoutubeChannelCard = () => {
  return (
    <div className='bg-mute px-10 py-14 rounded-3xl w-full'>
        <div className='w-3/5  mx-auto flex flex-col items-center'>
            <Image 
                src={'/sample.jpg'}
                height={100}
                width={100}
                alt='sample'
                className='w-15 h-15 rounded-full object-cover'
            />

            <h2 className='font-semibold text-lg bg-mute text-center mt-5 text-lg line-clamp-2'>Javascript mastery</h2>
            <p className='mt-3 text-sm font-normal text-mute line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur placeat nobis mollitia?</p>
        </div>
    </div>
  )
}

export default YoutubeChannelCard