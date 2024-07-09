import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-64 px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-3xl px-4 py-2'>{title}</h1>
        <p  className='hidden md:inline-block py-1 px-4 w-2/4'>{overview}</p>
        <div className='px-8'>
            <button className='bg-white  text-black px-9 py-2 rounded-lg hover:bg-opacity-70'>  Play</button>
            <button className=' mx-2 bg-slate-600 text-white px-6 py-2 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
