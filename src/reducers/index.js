import { combineReducers } from 'redux';
import moviesReducer from './movies';
import planetsReducer from './planets';
import fetchingReducer from './fetching';

const rootReducer = combineReducers({
  movies: moviesReducer,
  planets: planetsReducer,
  fetching: fetchingReducer,
});

export default rootReducer;
