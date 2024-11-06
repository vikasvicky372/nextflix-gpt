import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" ml-12">
      <h1 className="text-2xl font-semibold text-white p-2 pb-6">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide">
        {movies &&
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
            ></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
