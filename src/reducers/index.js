import { combineReducers } from 'redux';
import moviesReducer from './movies';
import planetsReducer from './planets';
import charactersReducer from './characters';
import fetchingReducer from './fetching';

const rootReducer = combineReducers({
  movies: moviesReducer,
  planets: planetsReducer,
  characters: charactersReducer,
  fetching: fetchingReducer,
});

export default rootReducer;
