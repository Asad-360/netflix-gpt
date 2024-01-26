import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
    const { movieResults } = useSelector((store) => store.gpt);
   // if (!movieNames) return null;
  
    return (
      <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>          
             <MovieList
              title="Searched Movie"
              movies={movieResults}
            />          
        </div>
      </div>
    );
  };
  export default GptMovieSuggestions;