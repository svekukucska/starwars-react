export const getMovies = () =>
 fetch('https://swapi.co/api/films/')
    .then(res => res.json());