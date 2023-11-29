import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetPopularMoviesQuery } from "../redux/services/api";
import MoviesList from "./MoviesList";

import ChevronLeft from "../assets/icons/chevron-left.svg";
import ChevronRight from "../assets/icons/chevron-right.svg";

const MoviesContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  const { data, isLoading, isFetching, isError } = useGetPopularMoviesQuery(
    parseFloat(page)
  );

  useEffect(() => {
    setSearchParams({ page });
  }, []);

  const isLastPage = parseFloat(page) === data?.total_pages;
  const isFirstPage = parseFloat(page) === 1;

  const handleClickNextPage = () => {
    if (!isLastPage) {
      const nextPage = parseFloat(page) + 1;
      setSearchParams({ page: nextPage.toString() });
    }
  };

  const handleClickPrevPage = () => {
    if (!isFirstPage) {
      const nextPage = parseFloat(page) - 1;
      setSearchParams({ page: nextPage.toString() });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={isFetching ? "opacity-50" : ""}>
        <MoviesList data={data?.results || []} />
      </div>
      <div className="flex justify-center">
        <div className="flex items-center gap-x-3">
          <button
            className="disabled:opacity-50"
            disabled={isFirstPage}
            onClick={handleClickPrevPage}
            aria-label="back"
          >
            <ChevronLeft width={35} height={35} stroke="#818CF8" />
          </button>
          <span className="text-xl">
            {page} / {data?.total_pages || 0}
          </span>
          <button
            className="disabled:opacity-50"
            disabled={isLastPage}
            onClick={handleClickNextPage}
            aria-label="forward"
          >
            <ChevronRight width={35} height={35} stroke="#818CF8" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MoviesContainer;
