const getCharacters = () => fetch('https://swapi.co/api/people/')
  .then((res) => res.json());

export default getCharacters;
