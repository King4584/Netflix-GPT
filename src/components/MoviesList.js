import React from "react";
//import {MovieImg_URL} from "../utils/constants"
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  console.log(movies);

//   if (!movies) return;
  return (
    movies && (
      <div className="px-8  text-white ">
        <h1 className="text-3xl py-4">{title}</h1>
        <div className="flex overflow-x-scroll custom-scrollbar">
          <div className="flex">
            {movies?.map((movies) => (
              <MovieCard key={movies.id} poster_path={movies?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MoviesList;
