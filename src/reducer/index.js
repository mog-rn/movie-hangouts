import {combineReducers} from 'redux';
import movie from './movie';
import news from './news';
import booking from './booking';
import ticket from './ticket';

export default combineReducers({
  movie,
  news,
  booking,
  ticket,
});
