import {
  TAKE_PLANETS,
  SET_PLANET,
} from '../actions/types';

const initialState = [];

const reducer = (state = initialState, { type, results, planet }) => {
  switch (type) {
    case TAKE_PLANETS:
      return [
        ...state,
        ...results,
      ];
    case SET_PLANET:
      return [
        ...state,
        planet,
      ];
    default:
      return state;
  }
};

export default reducer;
