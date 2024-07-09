import React from "react";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieID }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieID);
  const trailerLink =
    trailerVideo?.key === undefined
      ? "https://www.youtube.com/embed/LEjhY15eCx0?si=Ze9il007vP9Sq1-v?&autoplay=1&mute=1"
      : "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?&autoplay=1&mute=1";
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={trailerLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
