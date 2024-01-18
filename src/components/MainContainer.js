import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies) return;
    const mainMovie = movies[2];
    const {title,overview,id} = mainMovie;

  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieID={id}/>
    </div>
  )
}

export default MainContainer
