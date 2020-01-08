import { combineReducers } from 'redux';
import MovieList from './MovieList';
import moviesReducer from './movies';

const rootReducers = combineReducers({
  movies: moviesReducer,
  MovieListReducer: MovieList,
});

export default rootReducers;
