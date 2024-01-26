import {
  TMBD_MOVIE_LIST_OPTIONS,
  TMBD_MOVIE_LIST_URL,
} from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(TMBD_MOVIE_LIST_URL, TMBD_MOVIE_LIST_OPTIONS);
    const dataInJson = await data.json();
    dispatch(addNowPlayingMovies(dataInJson.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
