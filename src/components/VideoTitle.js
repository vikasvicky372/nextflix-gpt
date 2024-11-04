import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { IoInformationCircleOutline } from 'react-icons/io5';

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-10  absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-5xl font-bold p-2 m-2'>{title}</h1>
        <p className='text-md p-2 m-2 w-2/6'>{overview}</p>
        <div className='p-2 m-2'>
            <button className='py-2 px-8 bg-neutral-50 text-black rounded-lg hover:bg-opacity-80'><FaPlay className='inline-block text-xl items-center'/>   Play</button>
            <button className=' py-2 mx-4 px-6 bg-gray-600 rounded-lg hover:bg-opacity-80'><IoInformationCircleOutline className="inline-block text-2xl" /> More info</button>
        </div>
    </div>
  )
}

export default VideoTitle