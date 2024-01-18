import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_Options } from '../utils/constants';
import { addTopratedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
      const data = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          API_Options
        );
      const json = await data.json();
      dispatch(addTopratedMovies(json.results));
      // console.log(json.results);
    };
  
    useEffect(()=>{
        getTopRatedMovies();
    },[]);
}


export default useTopRatedMovies;
