import React from 'react'
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies); 
  // console.log(movies);
  // if (!movies) return;
  return movies.nowPlayingMovies &&(
    <div className='bg-black w-screen'>
      <div className='-mt-52 pl-12 pr-4 relative z-20'>
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MoviesList title={"Popular"} movies={movies.popularMovies}/>
        <MoviesList title={"Upcoming"} movies={movies.upcomingMovies}/>
        <MoviesList title={"Documentary"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;