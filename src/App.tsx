import { Route, Routes } from "react-router";
import { lazy, useEffect } from "react";
import Layout from "./layouts/Layout";
import { useAppDispatch } from "./redux/hooks";
import { useGetMovieGenresQuery } from "./redux/services/api";
import { setGenres } from "./redux/slices/genresSlice";

const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const WatchListPage = lazy(() => import("./pages/WatchListPage"));

const App = () => {
  const dispatch = useAppDispatch();

  const genres = useGetMovieGenresQuery();

  useEffect(() => {
    if (genres.data) {
      dispatch(setGenres(genres.data.genres));
    }
  }, [genres.data]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MoviesPage />} />
        <Route path="/:id" element={<MovieDetailsPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
      </Route>
    </Routes>
  );
};

export default App;
