import { Route, Routes } from "react-router";
import { Suspense, lazy, useEffect } from "react";
import Layout from "./layouts/Layout";
import { useAppDispatch } from "./redux/hooks";
import { useGetMovieGenresQuery } from "./redux/services/api";
import { setGenres } from "./redux/slices/genresSlice";
import Loader from "./components/Loader";

const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const WatchListPage = lazy(() => import("./pages/WatchListPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

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
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
