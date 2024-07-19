

import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_Options, options } from "../utils/constants";
import { useEffect } from "react";


const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const getPopularMovies=async()=>{

    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const data= await fetch(url,options);
      const json= await data.json();
      // console.log(json);
      dispatch(addPopularMovies(json?.results))
    }
    useEffect(()=>{
      getPopularMovies();
    },[])
}

export default usePopularMovies;