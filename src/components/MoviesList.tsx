import React from "react";
import { Movie } from "../redux/services/types";
import MovieCard from "./MovieCard";

type MoviesListProps = {
  data: Movie[];
};

const MoviesList = ({ data }: MoviesListProps) => {
  return (
    <div className="py-6 flex flex-wrap justify-around gap-y-12">
      {data.map((m) => (
        <MovieCard movie={m} key={m.id} />
      ))}
    </div>
  );
};

export default MoviesList;
