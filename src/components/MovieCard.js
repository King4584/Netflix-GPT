import React from 'react';
import { MovieImg_URL } from '../utils/constants';

const MovieCard = ({poster_path}) => {
    // console.log(MovieImg_URL+poster_path)

  return (
    <div className='w-48 pr-4'>
      <img alt="movie card" src={MovieImg_URL+poster_path}/>
    </div>
  )
}

export default MovieCard
