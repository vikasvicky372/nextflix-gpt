import React from 'react'
import { BACKGROUND_IMAGE } from '../utils/constants'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'

const GptContainer = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={BACKGROUND_IMAGE}
          alt="background-image"
        />
      </div>
      <GptSearchBar/>
      <GptMoviesSuggestion/>
    </div>
    
  )
}

export default GptContainer