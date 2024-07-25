import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector ((store) => store.movies)
  console.log(movies.nowPlayingMovies)

  return (
    <div className="bg-black w-screen pl-4" >
      <div className='-mt-52'>
        <MovieList title = "Now Playing" movies = {movies.nowPlayingMovies} />
        <MovieList title = "Trending" movies = {movies.nowPlayingMovies} />
        <MovieList title = "Popular" movies = {movies.popularMovies} />
        <MovieList title = "Upcoming" movies = {movies.nowPlayingMovies} />
        <MovieList title = "Horror" movies = {movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer