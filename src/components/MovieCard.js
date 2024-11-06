import React from 'react'
import { MOVIE_POSTER_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='flex-shrink-0 '>
        <img className="w-[200px] h-[200px] px-2 rounded-md"src={MOVIE_POSTER_CDN_URL+posterPath} alt='Movie_Poster'/>
    </div>
  )
}

export default MovieCard