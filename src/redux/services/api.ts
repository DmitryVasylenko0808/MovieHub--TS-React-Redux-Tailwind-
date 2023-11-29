import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL, TOKEN } from "../../constants";
import { DetailMovie, GetMovieGenresResponse, GetMoviesResponse, GetSearchedMoviesResponse } from "./types";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: headers => {
            headers.set("authorization", `Bearer ${TOKEN}`)
        }
    }),
    endpoints: builder => ({
        getPopularMovies: builder.query<GetMoviesResponse, number>({
            query: page => `/movie/popular?page=${page}`
        }),
        getSearchedMovies: builder.query<GetSearchedMoviesResponse, string>({
            query: search => `/search/movie?query=${search}`
        }),
        getDetailsMovie: builder.query<DetailMovie, string>({
            query: id => `/movie/${id}`
        }),
        getMovieGenres: builder.query<GetMovieGenresResponse, void>({
            query: () => "/genre/movie/list"
        }),
    })
});

export const {
    useGetPopularMoviesQuery,
    useLazyGetSearchedMoviesQuery,
    useGetDetailsMovieQuery,
    useGetMovieGenresQuery
} = api;