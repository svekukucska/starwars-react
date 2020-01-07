import { combineReducers } from 'redux';
import MovieList from './MovieList';

const rootReducers = combineReducers({
  MovieListReducer: MovieList,
});

export default rootReducers;
