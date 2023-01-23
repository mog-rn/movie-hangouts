import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import Reactotron from './ReactotronConfig';
const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware), Reactotron.createEnhancer()),
);

export default store;
