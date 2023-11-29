import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL, TOKEN } from "../../constants";
import { GetMoviesResponse } from "./types";

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
            query: page => `/popular?page=${page}`
        })
    })
});

export const {
    useGetPopularMoviesQuery
} = api;