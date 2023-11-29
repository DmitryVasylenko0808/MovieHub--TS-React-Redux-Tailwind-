import { Route, Routes } from "react-router";
import MoviesPage from "./pages/MoviesPage";
import MoveDetailsPage from "./pages/MoveDetailsPage";
import WatchListPage from "./pages/WatchListPage";
import Layout from "./layouts/Layout";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { useGetMovieGenresQuery } from "./redux/services/api";
import { setGenres } from "./redux/slices/genresSlice";

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
        <Route path="/:id" element={<MoveDetailsPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
      </Route>
    </Routes>
  );
};

export default App;
