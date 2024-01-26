import {
    TMBD_MOVIE_LIST_OPTIONS,
    TMBD_POPULAR_MOVIE_LIST_URL,
  } from "../utils/constant";
  import { useDispatch } from "react-redux";
  import { addPopularMovies } from "../utils/moviesSlice";
  import { useEffect } from "react";
  
  const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
      const data = await fetch(TMBD_POPULAR_MOVIE_LIST_URL, TMBD_MOVIE_LIST_OPTIONS);
      const dataInJson = await data.json();
      dispatch(addPopularMovies(dataInJson.results));
    };
    useEffect(() => {
        getPopularMovies();
    }, []);
  };
  export default usePopularMovies;
  