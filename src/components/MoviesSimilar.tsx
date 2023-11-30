import React from "react";
import { useParams } from "react-router";
import { useGetSimilarMoviesQuery } from "../redux/services/api";
import MovieCard from "./MovieCard";

const MoviesSimilar = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetSimilarMoviesQuery(id as string);

  if (isLoading) {
    return null;
  }

  return (
    <div className="py-6">
      <h2 className="mb-6 text-2xl font-bold">Similar Movies</h2>
      <div className="flex gap-x-6 overflow-x-auto overflow-y-hidden">
        {data?.results.map((m) => (
          <MovieCard movie={m} key={m.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesSimilar;
