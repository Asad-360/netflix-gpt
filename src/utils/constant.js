export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const AVATAR_URL =
  "https://avatars.githubusercontent.com/u/43516964?v=4";
export const BACKGROUND_MAIN_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/c11340ec-4211-4482-a9a0-f0ccd4d9e940/PK-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const TMBD_MOVIE_LIST_URL =
  "https://api.themoviedb.org/3/movie/now_playing";

export const TMBD_POPULAR_MOVIE_LIST_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";
export const TMBD_MOVIE_LIST_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:process.env.REACT_APP_TMDB_TOKEN,
  },
};
export const OPEN_AI_CHAT_URL = "https://api.openai.com/v1/chat/completions";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";