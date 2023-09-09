import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        Main ontainer
          - Video Background
          - Video Title 
        Secondary Container 
          - Movie List Vertically 
          - Multiple rows
      */
      }
    </div>
  )
};

export default Browse;
