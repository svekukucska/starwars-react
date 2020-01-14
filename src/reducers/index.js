import { combineReducers } from 'redux';
import moviesReducer from './movies';
import fetchingReducer from './fetching';

const rootReducers = combineReducers({
  movies: moviesReducer,
  fetching: fetchingReducer,

});

export default rootReducers;
