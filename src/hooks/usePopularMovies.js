import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addPopularMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  // Making API Call
  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', 
    API_OPTIONS
    );
    //To convert data into Json readable stream 
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  //Calling the API call inside useEffect so that we can call API only once 
  useEffect(() =>{
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
