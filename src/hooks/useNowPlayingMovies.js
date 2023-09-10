import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  // Making API Call
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
    API_OPTIONS
    );
    //To convert data into Json readable stream 
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  //Calling the API call inside useEffect so that we can call API only once 
  useEffect(() =>{
    if(!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
