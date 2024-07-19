import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Footer from './Footer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import useTopRated from '../hooks/useTopRated';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
  const gptclick =useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpComingMovies();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
      {gptclick?
      <GptSearch/>
      :<>
      <MainContainer/>
       <SecondaryContainer/> 
      </> }
      </main>
      <Footer />
    </div>
  )
}

export default Browse