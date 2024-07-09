import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const ShowGptSearchView = useSelector((store) => store.gpt.showGptSearch);
  //fetch data from TMDB API and update on store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  // if (!movies) return;

  //  const mainMovie = movies[0];

  //  const {title , description } = mainMovie;

  return (
    <div>
      <Header />
      {ShowGptSearchView ? <GptSearch/> : 
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
      {/* <MainContainer />
      <SecondaryContainer /> */}
    </div>
  );
};

export default Browse;
