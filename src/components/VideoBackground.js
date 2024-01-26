import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ videoKey }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(videoKey);
  let source = "";
  if (trailerVideo)
    source =
      "https://www.youtube.com/embed/" +
      trailerVideo.key +
      "?si=K1ffHm78nasBDh1f&autoplay=1&mute=1";
  return (
    <div className="w-full">
      {source !== "" && (
        <iframe
          src={source}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowFullScreen
          className="w-full aspect-video h-screen"
        ></iframe>
      )}
    </div>
  );
};
export default VideoBackground;
