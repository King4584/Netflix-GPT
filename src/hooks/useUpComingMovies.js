
import { useDispatch } from "react-redux";
import { API_Options, options } from "../utils/constants";
import { useEffect } from "react";
import { addUpComingMovies } from "../utils/moviesSlice";



const useUpComingMovies = ()=>{
        const dispatch =useDispatch();
        const getUpComing=async()=>{
            const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';            
            const data = await fetch(url,options);
            const json =await data.json();
           dispatch(addUpComingMovies(json?.results))

        }
        useEffect(()=>{
            getUpComing();
        },[])


}
export default  useUpComingMovies;