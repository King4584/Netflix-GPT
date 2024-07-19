import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_Options, options } from "../utils/constants";
import { useEffect } from "react";


const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const getNowPlayingMovies=async()=>{
      const data= await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",options);
      const json= await data.json();
      // console.log(json?.results);
      const url = '';
      

    // fetch(url, options)
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    //   .catch(err => console.error('error:' + err));
      dispatch(addNowPlayingMovies(json?.results))
    }
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;