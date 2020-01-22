import Home from './Home';
import StarWarsMovies from './StarWarsMovies';
import Movie from './Movie';
import NotFound from './NotFound';

const Pages = [
  {
    className: 'homepage',
    component: Home,
    props: {
      path: '/',
      exact: true,
    },
  },
  {
    className: 'movies',
    component: StarWarsMovies,
    props: {
      path: '/movies',
      exact: true,
    },
  },
  {
    className: 'movie',
    component: Movie,
    props: {
      path: '/movies/:movieId',
      exact: true,
    },
  },
  {
    className: 'not-found',
    component: NotFound,
  },
];

export default Pages;
