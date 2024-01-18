import React, { useEffect } from "react";
import Header from "./Header";
import { API_Options } from "../utils/constants";

const Browse = () => {
  const nowPlayingMovies = async () => {
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_Options
      );
    const json = await data.json();
    console.log(json);
  };

  useEffect(()=>{
    nowPlayingMovies();
  },[])

  return (
    <div>
      <Header />
      <p>Browse Page</p>
    </div>
  );
};

export default Browse;
