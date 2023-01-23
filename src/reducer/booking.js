import {SET_SEAT_DETAILS, SET_SELECTED_MOVIE} from '../action/action.types';

const initialState = {
  selectedMovie: null,
  selectedSeat: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEAT_DETAILS:
      return {
        ...state,
        selectedSeat: action.payload,
      };
    case SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    default:
      return state;
  }
};
