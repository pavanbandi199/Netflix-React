import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useVideoPlayingBackground = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS);
      const json = await data.json();
    //   console.log(json);
  
      const filterVideoData = json.results.filter((video) => video.type = "Trailer") ;
      const trailer = filterVideoData.length ? filterVideoData[0] : json.results[0];
    //   console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
      getMovieVideos();
    },[])
}
export default useVideoPlayingBackground;