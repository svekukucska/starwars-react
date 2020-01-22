import {
  TAKE_MOVIES,
  SET_MOVIE,
} from '../actions/types';

const initialState = [];

const reducer = (state = initialState, { type, results, movie }) => {
  switch (type) {
    case TAKE_MOVIES:
      return [
        ...state,
        ...results,
      ];
    case SET_MOVIE:
      return [
        ...state,
        movie,
      ];
    default:
      return state;
  }
};

export default reducer;
