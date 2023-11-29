import React from "react";
import MoviesList from "./MoviesList";
import { useAppSelector } from "../redux/hooks";

const BookMarkedMoviesContainer = () => {
  const watchList = useAppSelector((state) => state.watchList.data);

  return <MoviesList data={watchList} />;
};

export default BookMarkedMoviesContainer;
