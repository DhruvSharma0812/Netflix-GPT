import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { Background } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-gray-200 -z-20">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src= { Background }
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-black opacity-65"></div>
      </div>
        <GptSearchBar />
        <GptMoviesSuggestion />
    </div>
  )
}

export default GptSearch
