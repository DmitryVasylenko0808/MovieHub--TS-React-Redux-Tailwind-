import React from "react";
import { Movie } from "../redux/services/types";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleBookMarked } from "../redux/slices/watchListSlice";
import { motion } from "framer-motion";

import { MOVIES_IMAGES_URL } from "../constants";

import BookMark from "../assets/icons/bookmark.svg";
import BookMarkFilled from "../assets/icons/bookmark-fill.svg";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector((state) => state.genres.data);
  const watchList = useAppSelector((state) => state.watchList.data);

  const handleToggleBookMarked = () => dispatch(toggleBookMarked(movie));

  const isBookMarked = watchList.map((m) => m.id).includes(movie.id);
  const genresMovie = genres.filter((g) => movie.genre_ids.includes(g.id));

  const bookMarkedClassName = isBookMarked ? "bg-indigo-400" : "";

  return (
    <div className="min-w-[320px] max-w-[320px] h-[630px]">
      <Link className="block mb-3" to={`/${movie.id}`}>
        <img
          className="h-[480px] rounded-lg"
          src={`${MOVIES_IMAGES_URL}/${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <div className="mb-3 flex justify-between gap-x-2">
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        <motion.button
          whileTap={{ scale: 0.1 }}
          aria-label="bookmark"
          className={`min-w-[50px] h-[50px] inline-flex justify-center items-center border rounded-full border-indigo-400 ${bookMarkedClassName}`}
          onClick={handleToggleBookMarked}
        >
          {!isBookMarked ? (
            <BookMark width={25} height={25} stroke="#818CF8" />
          ) : (
            <BookMarkFilled width={25} height={25} fill="#FFFFFF" />
          )}
        </motion.button>
      </div>
      <div className="flex flex-wrap gap-3">
        {genresMovie.map((g) => (
          <span className="px-3 bg-slate-200 rounded-lg" key={g.id}>
            {g.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
