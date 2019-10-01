import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getMovies } from '../../helpers/getData';


class StarWarsMovies extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    getMovies().then(({results}) => this.setState({movies: results}))
  }

  render() {
    const { movies } = this.state;
    return ( 
      <ListGroup>
        {movies.map(({title, episode_id}) => (
          <ListGroup.Item key={episode_id}>
            <Link to={`/movies/${episode_id}`}>{title}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
};

export default StarWarsMovies;
