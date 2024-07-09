import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieID + "/videos?language=en-US",
      API_Options
    );
    const json = await data.json();
    console.log(json);

    // const filterData = json.results.filter((video) => video.type === "Trailer");
    // const trailer = filterData.length ? filterData[0] : json.results[0];
    // dispatch(addTrailerVideo(trailer));
    // console.log("ytuyjitv    ",trailer);
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
