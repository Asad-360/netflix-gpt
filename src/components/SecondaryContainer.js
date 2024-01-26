import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="relative -mt-56 z-20 px-20 bg-opacity-0 scroll-m-1">
      <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
    </div>
  );
};
export default SecondaryContainer;
