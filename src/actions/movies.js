import getMovies from '../helpers/getData';
import {
  TAKE_MOVIES,
  SET_MOVIE,
} from './types';
import setFetching, { setFetchingById } from './fetching';
import getIdFromUrl from '../helpers/url';

export const setMoviesAction = (results) => ({
  type: TAKE_MOVIES,
  results,
});

export const setMovieAction = (movie) => ({
  type: SET_MOVIE,
  movie,
});

export const fetchMovie = (movieId) => (dispatch, getState) => {
  const {
    movies,
    fetching: {
      movies: isMoviesFetched,
      movie: {
        [movieId]: isMovieFetched,
      },
    },
  } = getState();

  if (isMoviesFetched) {
    return;
  }
  const movie = movies.find((element) => element.id === movieId);

  if (movie || isMovieFetched) {
    return;
  }

  dispatch(setFetchingById('movie', true, movieId));

  fetch(`https://swapi.co/api/films/${movieId}`)
    .then((res) => res.json())
    .then((result) => {
      const { url } = result;
      const id = getIdFromUrl(url);
      dispatch(setMovieAction({ ...result, id }));
    });
};

const fetchMovies = () => (dispatch, getState) => {
  const { fetching: { movies } } = getState();
  if (!movies) {
    dispatch(setFetching('movies', true));
    getMovies().then(({ results }) => {
      const fetchedMovies = results.map((movie) => ({ ...movie, id: getIdFromUrl(movie.url) }));
      dispatch(setMoviesAction(fetchedMovies));
    });
  }
};

export default fetchMovies;
