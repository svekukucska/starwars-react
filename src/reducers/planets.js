import { TAKE_PLANETS } from '../actions/types';

const initialState = [];

const reducer = (state = initialState, { type, results }) => {
  switch (type) {
    case TAKE_PLANETS:
      return [
        ...state,
        ...results,
      ];
    default:
      return state;
  }
};

export default reducer;
