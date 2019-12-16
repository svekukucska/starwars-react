import { MOVIE_LIST_RECEIVED } from './action-types';

const setMovies = (results) => ({
  type: MOVIE_LIST_RECEIVED,
  results,
});

const fetchMovies = () => (dispatch) => {
  return fetch(`https://swapi.co/api/films/`)
    .then(response => (response.ok ? response.json() : null))
    .then(({ results }) => {
      dispatch(setMovies(results));
    })
    .catch(() => {
      alert("Error: Movie List not received!");
    });
};

export default fetchMovies;
