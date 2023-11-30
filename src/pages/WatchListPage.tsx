import React from "react";
import BookMarkedMoviesContainer from "../components/BookMarkedMoviesContainer";
import { motion } from "framer-motion";

const WatchListPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <BookMarkedMoviesContainer />
    </motion.div>
  );
};

export default WatchListPage;
