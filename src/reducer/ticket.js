import {SET_TICKET_LIST} from '../action/action.types';

const initialState = {
  ticketList: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKET_LIST:
      return {
        ...state,
        ticketList: action.payload,
      };

    default:
      return state;
  }
};
