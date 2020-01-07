import TAKE_MOVIES from '../actions/types';

const initialState = {
  movies: [],
};

const reducer = (state = initialState, { type, results }) => {
  if (type === TAKE_MOVIES) {
    return {
      ...state,
      movies: results,
    };
  }
  return state;
};

export default reducer;
