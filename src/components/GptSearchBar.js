import { useRef } from "react";
import {
  BG_URL,
  TMBD_MOVIE_LIST_OPTIONS,
  OPEN_AI_CHAT_URL,
} from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
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
  const handleGptSearchClick = () => {
    if (searchText.current.value)
      Promise.resolve(searchMovieTMDB(searchText.current.value))
        .then((x) => {
          console.log(x);
          dispatch(addGptMovieResult({ moviesResult: x }));
        })
        .catch((e) => {
          console.log("error while searching tmbd", e);
        });
    return;
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    //const gptResults = "";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const token = `Bearer somechatgpttokenhere`;
    myHeaders.append("Authorization", token);

    var raw = JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://api.openai.com/v1/chat/completions", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          // placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {/* {lang[langKey].search} */} Search Movie
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
