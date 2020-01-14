import getMovies from '../helpers/getData';
import { TAKE_MOVIES } from './types';
import setFetching from './fetching';

export const setMoviesAction = (results) => ({
  type: TAKE_MOVIES,
  results,
});

const fetchMovies = () => (dispatch, getState) => {
  const { fetching: { movies } } = getState();
  if (!movies) {
    dispatch(setFetching('movies', true));
    getMovies().then(({ results }) => {
      dispatch(setMoviesAction(results));
    });
  }
};

export default fetchMovies;
