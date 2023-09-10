import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    // Fetch trailer video && updating the store with trailer video data 
      const getMovieVideos = async() => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
        movieId + "/videos?language=en-US", 
        API_OPTIONS
        );
    
        const json = await data.json();
    
        const filterData = json.results.filter((video) => video.type === "Trailer");
        /* If multiple trailer is present then take the first trailer 
        and if trailer is not present, then display the first video in the result */
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        !trailerVideo && getMovieVideos();
      }, []);

};

export default useMovieTrailer;
