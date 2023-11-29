export type Movie = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    releaseDate: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
};

export type GetMoviesResponse = {
    page: number,
    results: Movie[],
    total_results: number,
    total_pages: number,
};

export type Genre = {
    id: number,
    name: string
};

export type GetMovieGenresResponse = {
    genres: Genre[]
};