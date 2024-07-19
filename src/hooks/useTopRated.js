import { useDispatch } from "react-redux";
import { API_Options, options } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";



const useTopRated = ()=>{
        const dispatch =useDispatch();
        const getTopratedMovies=async()=>{
            const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
            
            const data = await fetch(url,options);
            const json =await data.json();
            // console.log(json);
           dispatch(addTopRatedMovies(json?.results));
        //    console.log("top rated -",json?.results);
        }
        useEffect(()=>{
            getTopratedMovies();
        },[])


}
export default useTopRated;