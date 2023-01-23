import {
  SET_TOP_HEADLINES,
  SET_TRENDING_HEADLINES,
} from '../action/action.types';

const initialState = {
  topHeadline: null,
  trendingHeadlines: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_HEADLINES:
      return {
        ...state,
        topHeadline: action.payload,
      };
    case SET_TRENDING_HEADLINES:
      return {
        ...state,
        trendingHeadlines: action.payload,
      };
    default:
      return state;
  }
};
