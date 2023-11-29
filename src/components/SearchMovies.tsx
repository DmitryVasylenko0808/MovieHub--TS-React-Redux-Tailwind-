import React from "react";
import { Link } from "react-router-dom";
import { useLazyGetSearchedMoviesQuery } from "../redux/services/api";

import Search from "../assets/icons/search.svg";

const SearchMovies = () => {
  const [getSearchedMovies, { data }] = useLazyGetSearchedMoviesQuery();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    getSearchedMovies(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-[560px] px-4 py-2 border-2 rounded-3xl flex items-center gap-x-3">
        <Search width={30} height={30} />
        <input
          className="outline-0 text-xl"
          aria-label="search"
          placeholder="Search movie..."
          onChange={handleSearch}
        />
        <div className="absolute z-10 top-full bg-white flex flex-col">
          {data?.results.map((m) => (
            <Link
              to={`/${m.id}`}
              className="px-4 py-2 flex items-center gap-x-4 hover:bg-neutral-200"
            >
              <span className="text-2xl">{m.title}</span>
              <span className="text-xl text-neutral-400">
                {m.release_date.split("-")[0]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMovies;
