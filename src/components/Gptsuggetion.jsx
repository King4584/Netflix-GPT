import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const Gptsuggetion = () => {
    const gpt=useSelector((store)=>store.gpt);

    const {moviename , movielist}=gpt;
    //  const videotrailer =(e)=>{}

    if(!moviename) return null;

    if(!movielist) return null;

  return (
    <div  className='p-4 m-4 bg-black text-white opacity-90'  >
        {moviename.map((movies,index)=>(<MovieList  key={movies} title={movies} movies={movielist[index]}/>))}
        
    </div>
  )
}

export default Gptsuggetion