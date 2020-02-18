import getPlanets from '../helpers/getPlanets';
import { TAKE_PLANETS } from './types';
import setFetching from './fetching'; // check if neeeds to be modified or replaceds

export const setPlanetsAction = (results) => ({
  type: TAKE_PLANETS,
  results,
});

const fetchPlanets = () => (dispatch, getState) => {
  const { fetching: { planets } } = getState();
  if (!planets) {
    dispatch(setFetching('planets', true));
    getPlanets().then(({ results }) => {
      dispatch(setPlanetsAction(results));
    });
  }
};

export default fetchPlanets;
