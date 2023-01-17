import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface FetchUpcomingMoviesPayload {
  results: any[];
}

interface Movie {
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

interface MovieState {
  upcoming: Movie[];
  popular: Movie[];
  topRated: Movie[];
  nowPlaying: Movie[];
  searched: Movie[];
  loading: boolean;
  selecredMovie: Movie | null;
}

export const fetchUpcomingMovies = createAsyncThunk<
  FetchUpcomingMoviesPayload,
  void,
  { rejectValue: any }
>("movies/fetchUpcoming", async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming",
      {
        params: {
          api_key: "57f69e0d07d803f48a501b9447c516e1",
        },
      }
    );
    return { results: data.results };
  } catch (e) {
    return Promise.reject(e);
  }
});

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    upcoming: [],
    popular: [],
    topRated: [],
    nowPlaying: [],
    searched: [],
    loading: false,
    selecredMovie: null,
  } as MovieState,
  extraReducers: (builder) => {
    builder.addCase(fetchUpcomingMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
      state.upcoming = action.payload.results;
      state.loading = false;
    });
    builder.addCase(fetchUpcomingMovies.rejected, (state) => {
      state.loading = false;
    });
  },
  reducers: {
    selectMovie: (state, action) => {
      state.selecredMovie = action.payload;
    },
  },
});

export const { selectMovie } = movieSlice.actions;

export default movieSlice.reducer;
