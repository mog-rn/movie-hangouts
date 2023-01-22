export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    original_language: string;
    original_title: string;
    genre_ids: number[];
}

export interface MoviesListState {
  movies: any;
  movieList: Movie[];
}
