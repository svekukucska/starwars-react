import {
  SET_FETCHING,
  SET_FETCHING_BY_ID,
} from './types';

const setFetching = (item, value) => ({
  type: SET_FETCHING,
  item,
  value,
});

export const setFetchingById = (item, value, id) => ({
  type: SET_FETCHING_BY_ID,
  item,
  id,
  value,
});

export default setFetching;
