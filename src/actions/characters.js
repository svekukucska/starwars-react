import { SET_CHARACTER } from './types';
import { setFetchingById } from './fetching';
import getIdFromUrl from '../helpers/url';

export const setCharacterAction = (character) => ({
  type: SET_CHARACTER,
  character,
});

const fetchCharacter = (characterId) => (dispatch, getState) => {
  const {
    characters = [],
    fetching: {
      character: {
        [characterId]: isCharacterFetched,
      },
    },
  } = getState();

  const character = characters.find((element) => element.id === characterId);

  if (character || isCharacterFetched) {
    return;
  }

  dispatch(setFetchingById('character', true, characterId));

  fetch(`https://swapi.co/api/people/${characterId}`)
    .then((res) => res.json())
    .then((result) => {
      const { url } = result;
      const id = getIdFromUrl(url);
      dispatch(setCharacterAction({ ...result, id }));
    });
};

export default fetchCharacter;
