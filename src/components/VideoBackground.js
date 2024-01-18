import React from "react";
// import useMovieTrailer from "../Hooks/useMovieTrailer";
// import { useSelector } from "react-redux";

const VideoBackground = ({ movieID }) => {
  // const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  // useMovieTrailer({movieID});

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/UGc5Tzz19UY?si=-yUBXW9LMauaB2R3?&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
