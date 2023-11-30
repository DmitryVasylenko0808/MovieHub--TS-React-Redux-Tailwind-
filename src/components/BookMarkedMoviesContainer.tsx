import React from "react";
import MoviesList from "./MoviesList";
import { useAppSelector } from "../redux/hooks";

const BookMarkedMoviesContainer = () => {
  const watchList = useAppSelector((state) => state.watchList.data);

  if (watchList.length === 0) {
    return (
      <div className="py-6 text-2xl text-center text-neutral-600">
        Empty Watch List
      </div>
    );
  }

  return <MoviesList data={watchList} />;
};

export default BookMarkedMoviesContainer;
