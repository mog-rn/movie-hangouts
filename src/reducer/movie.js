import {
  SET_NEW_RELEASED_MOVIES,
  SET_POPULAR_MOVIES,
  SET_NOW_PLAYING_MOVIES,
  SET_TOP_RATED_MOVIES,
} from '../action/action.types';

const initialState = {
  newReleasedMovies: null,
  popularMovies: null,
  nowPlayingMovies: null,
  topRatedMovies: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_RELEASED_MOVIES:
      return {
        ...state,
        newReleasedMovies: action.payload,
      };
    case SET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case SET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };
    case SET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload,
      };
    default:
      return state;
  }
};
