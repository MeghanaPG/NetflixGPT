import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addUpcomingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  // Making API Call
  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', 
    API_OPTIONS
    );
    //To convert data into Json readable stream 
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  //Calling the API call inside useEffect so that we can call API only once 
  useEffect(() =>{
    getUpcomingMovies();
  }, [])
}

export default useUpcomingMovies;
