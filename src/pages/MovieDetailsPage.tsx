import React from "react";
import MovieDetail from "../components/MovieDetail";
import MoviesSimilar from "../components/MoviesSimilar";
import { motion } from "framer-motion";

const MovieDetailsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <MovieDetail />
      <MoviesSimilar />
    </motion.div>
  );
};

export default MovieDetailsPage;
