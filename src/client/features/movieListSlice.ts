import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/movie';

interface MoviesListState {
  movies: Movie[];
}

const initialState: MoviesListState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state: MoviesListState, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
    },
  },
});

export const { addMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
