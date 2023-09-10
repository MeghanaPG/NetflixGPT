import { BG_Img_URL } from "../Utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";


const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src= {BG_Img_URL}
        alt = "logo"
        />
        </div>
        <div className="">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
  );
};

export default GptSearchPage;
