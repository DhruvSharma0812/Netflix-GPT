import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

  const movies = useSelector(store => store.movies?.upcomingMovies)
  if (!movies) return // Early Return

  const mainMovie = movies[Math.floor(Math.random() * 3)];
  // console.log (movies)
  // const mainMovie = movies[0];
  // console.log (mainMovie)

  const { original_title, overview, id } = mainMovie;

  return (
    <div>

      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>

  )
}

export default MainContainer
