import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const YoutubeChannelCard = ({image, name, link, description}) => {
  return (

    // show youtube channel card only when props are available gor link and name..
    name && link && (        
        <>
            <a href={'#'} className='bg-mute px-10 py-14 rounded-3xl w-full youtub-chanel-card'>
                <div className='w-3/5  mx-auto flex flex-col items-center'>
                    <Image 
                        src={'/sample.jpg'}
                        height={100}
                        width={100}
                        alt='sample'
                        className='w-15 h-15 rounded-full object-cover'
                    />

                    <h2 className='font-semibold text-lg bg-mute text-center mt-5 line-clamp-2'>{name}</h2>

                    {/* Show description when description is only available in the props */}
                    {
                        description && (
                            <p className='mt-3 text-sm font-normal text-mute line-clamp-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur placeat nobis mollitia?</p>
                        )
                    }
                </div>
            </a>
        </>
    )
    
  )
}

export default YoutubeChannelCard