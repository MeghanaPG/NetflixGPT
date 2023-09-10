import { BG_Img_URL } from "../Utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";


const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src= {BG_Img_URL}
        alt = "logo"
        />
        </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
