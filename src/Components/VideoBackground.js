import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  useMovieTrailer(movieId);

  return (
    //Get this code from the Trailer Embed in YouTube
    <div className=" w-screen" > 
      <iframe 
      className="w-screen aspect-video"
      //Below the link is dynamic, whenever the trailerId will change the link will change accordingly.
      src= { "https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1" }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >
      </iframe>
    </div>
  );
};

export default VideoBackground;
