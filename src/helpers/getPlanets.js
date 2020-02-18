const getPlanets = () => fetch('https://swapi.co/api/planets/')
  .then((res) => res.json());

export default getPlanets;
