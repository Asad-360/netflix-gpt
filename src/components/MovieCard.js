import { IMG_CDN_URL } from "../utils/constant";
const MovieCard = ({posterPath}) =>{
    if (!posterPath) return null;
  return (
    <div className="w-[320px] h-[180px] aspect-w-16 aspect-h-9 mr-4 shadow-lg rounded-md relative">
      <img className="w-[320px] h-[180px]  object-cover rounded-md bg-center bg-no-repeat " alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
}
export default MovieCard;