import GptMovieSuggestions from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={process.env.REACT_APP_BACKGROUND_URL}
          alt="logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions/>
      </div>
    </div>
  );
};
export default GptSearch;
