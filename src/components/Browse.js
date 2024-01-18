import React, { useEffect } from "react";
import Header from "./Header";
// import { API_Options } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";


const Browse = () => {
  //fetch data from TMDB API and update on store
  useNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
