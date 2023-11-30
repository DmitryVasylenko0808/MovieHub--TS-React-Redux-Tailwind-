import React from "react";
import SearchMovies from "../components/SearchMovies";
import MoviesContainer from "../components/MoviesContainer";
import { motion } from "framer-motion";

const MoviesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SearchMovies />
      <MoviesContainer />
    </motion.div>
  );
};

export default MoviesPage;
