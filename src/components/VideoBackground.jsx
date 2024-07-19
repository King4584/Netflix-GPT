import React, { useEffect, useState } from 'react'
import { API_Options,options } from '../utils/constants';

const VideoBackground = ({movieid}) => {
    const [trailerid,setTrailerId]=useState(null);
    const getMovieVideos= async()=>{
      
        // console.log(movieid);
        const data= await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos`,options);
        // console.log(data);
        const json=await data?.json();
        // console.log(json);
        const filterData=json?.results.filter(video=>video.type==="Trailer")
        const trailer=filterData[0];
        
        setTrailerId(trailer?.key)
        
    }
    // console.log("id :",trailerid);
    useEffect(()=>{
        getMovieVideos();
    },[movieid])
    
    
  return (
    <div className='w-full '>
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerid+"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground