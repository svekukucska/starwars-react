import { TAKE_PLANETS } from '../actions/types';

const initialState = {
  planets: [],
};

const reducer = (state = initialState, { type, results }) => {
  if (type === TAKE_PLANETS) {
    return {
      ...state,
      planets: results,
    };
  }
  return state;
};

export default reducer;
