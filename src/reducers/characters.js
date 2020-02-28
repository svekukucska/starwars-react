import { SET_CHARACTER } from '../actions/types';

const initialState = [];

const reducer = (state = initialState, { type, character }) => {
  switch (type) {
    case SET_CHARACTER:
      return [
        ...state,
        character,
      ];
    default:
      return state;
  }
};

export default reducer;
