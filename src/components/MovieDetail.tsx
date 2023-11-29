import React from "react";
import { useParams } from "react-router";
import { useGetDetailsMovieQuery } from "../redux/services/api";
import { MOVIES_IMAGES_URL } from "../constants";

import BookMark from "../assets/icons/bookmark.svg";
import BookMarkFilled from "../assets/icons/bookmark-fill.svg";

const MovieDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetDetailsMovieQuery(id as string);

  const releaseYear = data?.release_date.split("-")[0];
  const releaseMonth = data?.release_date.split("-")[1];
  const releaseDay = data?.release_date.split("-")[2];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className="flex">
        <img
          src={`${MOVIES_IMAGES_URL}/${data?.poster_path}`}
          alt={data?.title}
          className="w-[460px] h-[680px] rounded-lg"
        />
        <div className="flex-auto px-12 py-8">
          <div className="mb-2 flex items-center gap-x-6">
            <div className="flex items-center gap-x-3">
              <h2 className="text-2xl font-bold">{data?.title}</h2>
              <span className="text-xl text-neutral-600">({releaseYear})</span>
            </div>
            <button
              aria-label="bookmark"
              className="min-w-[50px] h-[50px] inline-flex justify-center items-center border rounded-full border-indigo-400"
            >
              <BookMark width={25} height={25} stroke="#818CF8" />
            </button>
          </div>
          <div className="mb-6 flex gap-x-4">
            <span className="text-lg text-neutral-400">
              {releaseYear}/{releaseMonth}/{releaseDay}
            </span>
            <div className="flex gap-x-2">
              {data?.genres.map((g, i) =>
                i !== data.genres.length - 1 ? (
                  <span className="text-lg text-neutral-400">{g.name},</span>
                ) : (
                  <span className="text-lg text-neutral-400">{g.name}</span>
                )
              )}
            </div>
            <span className="text-lg text-neutral-400">
              {data?.runtime} mins
            </span>
            {data?.adult && (
              <span className="text-lg text-neutral-400">18+</span>
            )}
          </div>
          <h3 className="mb-4 text-lg italic">{data?.tagline}</h3>
          <div className="mb-6">
            <h3 className="mb-2 font-bold text-xl">Overview</h3>
            <p className="text-lg">{data?.overview}</p>
          </div>
          <div className="mb-6 flex gap-x-4">
            <span className="text-lg text-neutral-600">
              Status: {data?.status},
            </span>
            <span className="text-lg text-neutral-600">
              Original language: {data?.original_language},
            </span>
            <span className="text-lg text-neutral-600">
              Budget: {data?.budget},
            </span>
            <span className="text-lg text-neutral-600">
              Revenue: {data?.revenue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
