import { SET_FETCHING } from '../actions/types';

const initialState = {
  movies: false,
  planets: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHING:
      return {
        ...state,
        [action.item]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
