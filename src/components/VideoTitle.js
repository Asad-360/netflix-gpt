const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black text-left h-screen">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 py-6">{overview}</p>
      <div>
        <button className="bg-gray-200 text-lg font-bold py-5 px-10 rounded-md shadow- text-black">
          <label className="font-bold text-3xl">▶</label>
          <label className="text-2xl mx-2">Play</label>
        </button>
        <button className="ml-3 bg-gray-500 text-lg font-bold py-5 px-10 rounded-md shadow-md opacity-60">
          <label className="text-2xl font-bold text-white">More Info</label>
          <label className="bg-gray-400 rounded-full  py-1 px-3.5 ml-2 text-white">
            ℹ
          </label>
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
