import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie, DetailMovie } from "../services/types";

type WatchListState = {
    data: Movie[]
};

const initialState: WatchListState = {
    data: []
};

export const watchListSlice = createSlice({
    name: "watchList",
    initialState,
    reducers: {
        toggleBookMarked: (state, action: PayloadAction<Movie | DetailMovie>) => {
            const { payload } = action;
            const isBookMarked = state.data.map(m => m.id).includes(payload.id);

            let genre_ids: number[];
            if ("genre_ids" in payload) {
                genre_ids = payload.genre_ids;
            } else if ("genres" in payload) {
                genre_ids = payload.genres.map(g => g.id);
            } else {
                genre_ids = [];
            }

            const movie: Movie = {
                adult: payload.adult,
                backdrop_path: payload.backdrop_path,
                genre_ids,
                id: payload.id,
                original_language: payload.original_language,
                original_title: payload.original_title,
                overview: payload.overview,
                popularity: payload.popularity,
                poster_path: payload.poster_path,
                release_date: payload.release_date,
                title: payload.title,
                video: payload.video,
                vote_average: payload.vote_average,
                vote_count: payload.vote_count
            }

            if (!isBookMarked) {
                state.data.push(movie);
            } else {
                state.data.splice(state.data.findIndex(m => m.id === movie.id), 1);
            }
        }
    }
});

export const { toggleBookMarked } = watchListSlice.actions;
export default watchListSlice.reducer;