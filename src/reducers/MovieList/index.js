import { MOVIE_LIST_RECEIVED } from "../../actions/action-types";

const initialState = {
  movies: [],
};

const MovieList = (state = initialState, { type, results }) => {
  switch (type) {
    case MOVIE_LIST_RECEIVED:
      return {
        ...state,
        movies: results,
      }
    default:
      return state
  }
};

export default MovieList;
