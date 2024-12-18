import Tag from '@/components/common/Tag'
import SubTitlte from '@/components/common/Titles/SubTitlte'
import Image from 'next/image'
import React from 'react'

const YoutubeVideoCard = () => {
  return (
    <div className='w-full py-5 bg-mute rounded-2xl'>
        <div className="w-11/12 mx-auto">
            <Image 
                src={'/sample.jpg'}
                width={500}
                height={500}
                alt='Sample video imaeg'
                className='w-full aspect-video rounded-2xl'
            />

            <div className='mt-4'>
                <div className='line-clamp-2'>
                    <SubTitlte />
                </div>
                <div className='line-clamp-1 flex gap-2 flex-grow mt-3'>
                    <Tag tag={'Javascript'} />
                    <Tag tag={'Next js'} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default YoutubeVideoCard