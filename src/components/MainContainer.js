import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[1];
  const { title, overview, id } = mainMovie;
  //console.log(mainMovie);

  return (
    <div>
      <VideoTitle title = {title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;