import getMovies from '../helpers/getData';
import { MOVIE_LIST_RECEIVED } from './action-types';

export const setMovies = (results) => ({
  type: MOVIE_LIST_RECEIVED,
  results,
});

export const setMoviesAction = (results) => ({
  type: 'TAKE_MOVIES',
  results,
});

const fetchMovies = () => (dispatch) => getMovies().then(({ results }) => {
  dispatch(setMoviesAction(results));
  dispatch(setMovies(results));
});

export default fetchMovies;
