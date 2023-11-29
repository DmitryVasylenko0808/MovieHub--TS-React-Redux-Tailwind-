import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./services/api";
import genresSlice from "./slices/genresSlice";
import watchListSlice from "./slices/watchListSlice";

export const store = configureStore({
    reducer: {
        genres: genresSlice,
        watchList: watchListSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;