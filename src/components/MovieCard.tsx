import React from "react";
import { Movie } from "../redux/services/types";
import { Link } from "react-router-dom";
import { MOVIES_IMAGES_URL } from "../constants";

import BookMark from "../assets/icons/bookmark.svg";
import BookMarkFilled from "../assets/icons/bookmark-fill.svg";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="w-[320px]">
      <Link className="block mb-3" to={`/${movie.id}`}>
        <img
          className="h-[480px]"
          src={`${MOVIES_IMAGES_URL}/${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <div className="mb-2 flex justify-between gap-x-2">
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        <button className="min-w-[50px] h-[50px] inline-flex justify-center items-center border rounded-full border-indigo-400">
          <BookMark width={25} height={25} stroke="#818CF8" />
        </button>
      </div>
      <div className="flex flex-wrap gap-3"></div>
    </div>
  );
};

export default MovieCard;
