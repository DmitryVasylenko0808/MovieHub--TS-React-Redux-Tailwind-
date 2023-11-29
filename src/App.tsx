import { Route, Routes } from "react-router";
import MoviesPage from "./pages/MoviesPage";
import MoveDetailsPage from "./pages/MoveDetailsPage";
import WatchListPage from "./pages/WatchListPage";
import Layout from "./layouts/Layout";

const App = () => {
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
