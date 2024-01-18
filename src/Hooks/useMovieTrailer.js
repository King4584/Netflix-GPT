import  { useEffect } from 'react'
import { API_Options } from '../utils/constants';
// import { addTrailerVideo } from '../utils/movieSlice';
// import { useDispatch } from 'react-redux';

const useMovieTrailer = ({movieID}) => {
//   const dispatch = useDispatch();
  

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/"+movieID+"/videos?",
      API_Options
    ); 
    const json = await data.json();
    console.log(json);

    //  const filteredData = json.results.filter((video) => video?.type === "Trailer");
    // const trailer = filteredData.length ? filteredData[0] : json.result[0];
    // dispatch(addTrailerVideo(trailer));
    // console.log(trailer);
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
}

export default useMovieTrailer;
