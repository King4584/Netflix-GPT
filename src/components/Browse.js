import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  //fetch data from TMDB API and update on store
  useNowPlayingMovies();
  // if (!movies) return;

  //  const mainMovie = movies[0];

  //  const {title , description } = mainMovie;

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
