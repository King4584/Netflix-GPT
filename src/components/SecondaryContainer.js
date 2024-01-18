import React from 'react'
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);  //?.nowPlayingMovies
  // console.log(movies);
  // if (!movies) return;
  return movies.nowPlayingMovies &&(
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Trending"} movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Popular"} movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Documentary"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;