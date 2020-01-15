import { SET_FETCHING } from './types';

const setFetching = (item, value) => ({
  type: SET_FETCHING,
  item,
  value,
});

export default setFetching;
