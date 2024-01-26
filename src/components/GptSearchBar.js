import { useRef } from "react";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const handleGptSearchClick = () => {
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
