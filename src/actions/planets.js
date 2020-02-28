import getPlanets from '../helpers/getPlanets';
import {
  TAKE_PLANETS,
  SET_PLANET,
} from './types';
import setFetching, { setFetchingById } from './fetching';
import getIdFromUrl from '../helpers/url';

export const setPlanetsAction = (results) => ({
  type: TAKE_PLANETS,
  results,
});

export const setPlanetAction = (planet) => ({
  type: SET_PLANET,
  planet,
});

export const fetchPlanet = (planetId) => (dispatch, getState) => {
  const {
    planets,
    fetching: {
      planet: {
        [planetId]: isPlanetFetched,
      },
    },
  } = getState();

  const planet = planets.find((element) => element.id === planetId);

  if (planet || isPlanetFetched) {
    return;
  }

  dispatch(setFetchingById('planet', true, planetId));

  fetch(`https://swapi.co/api/planets/${planetId}`)
    .then((res) => res.json())
    .then((result) => {
      const { url } = result;
      const id = getIdFromUrl(url);
      dispatch(setPlanetAction({ ...result, id }));
    });
};

const fetchPlanets = () => (dispatch, getState) => {
  const { fetching: { planets } } = getState();
  if (!planets) {
    dispatch(setFetching('planets', true));
    getPlanets().then(({ results }) => {
      const fetchedPlanets = results.map((planet) => ({ ...planet, id: getIdFromUrl(planet.url) }));
      dispatch(setPlanetsAction(fetchedPlanets));
    });
  }
};

export default fetchPlanets;
