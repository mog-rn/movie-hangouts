import {
  SET_NEW_RELEASED_MOVIES,
  SET_POPULAR_MOVIES,
  SET_NOW_PLAYING_MOVIES,
  SET_TOP_RATED_MOVIES,
} from './action.types';
import Axios from 'axios';

const API_KEY = 'faf981d79c94b75d3c34a1b45c9330b9';

export const getNewReleasedMovies = () => async dispatch => {
  const base_url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const {data} = await Axios.get(base_url);
    dispatch({
      type: SET_NEW_RELEASED_MOVIES,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getpopularMovies = () => async dispatch => {
  const base_url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const {data} = await Axios.get(base_url);
    dispatch({
      type: SET_POPULAR_MOVIES,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getNowPlayingMovies = () => async dispatch => {
  const base_url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  try {
    const {data} = await Axios.get(base_url);
    dispatch({
      type: SET_NOW_PLAYING_MOVIES,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTopRatedMovies = () => async dispatch => {
  const base_url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const {data} = await Axios.get(base_url);
    dispatch({
      type: SET_TOP_RATED_MOVIES,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
