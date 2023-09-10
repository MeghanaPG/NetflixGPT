import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTopRatedMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  // Making API Call
  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', 
    API_OPTIONS
    );
    //To convert data into Json readable stream 
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  //Calling the API call inside useEffect so that we can call API only once 
  useEffect(() =>{
    getTopRatedMovies();
  }, [])
}

export default useTopRatedMovies;
