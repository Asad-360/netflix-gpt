import {
  BG_URL,
  TMBD_MOVIE_LIST_OPTIONS,
  OPEN_AI_CHAT_URL,
} from "../utils/constant";
import GptSearchBar from "./GptSearchBar";
const GptSearch = () => {
  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMBD_MOVIE_LIST_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
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
      </div>
    </div>
  );
};
export default GptSearch;
