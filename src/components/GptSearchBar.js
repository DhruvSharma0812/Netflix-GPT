import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);
  return (
    
    <div className="flex justify-center items-center py-4">
      <form className="flex w-1/2 mt-[6%] items-center bg-gray-800 p-2 rounded-lg shadow-md">
        <input 
          type="text" 
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="w-full p-2 bg-gray-900 text-white rounded-l-lg focus:outline-none"
        />
        <button 
          type="submit" 
          className="p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;
