import {
  SET_FETCHING,
  SET_FETCHING_BY_ID,
} from '../actions/types';

const initialState = {
  movies: false,
  planets: false,
  movie: {},

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHING:
      return {
        ...state,
        [action.item]: action.value,
      };
    case SET_FETCHING_BY_ID:
      return {
        ...state,
        [action.item]: {
          ...state[action.item],
          [action.id]: action.value,
        },

      };
    default:
      return state;
  }
};

export default reducer;
