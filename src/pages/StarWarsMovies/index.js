import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import getMovies from '../../helpers/getData';


class StarWarsMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    getMovies().then(({ results }) => this.setState({ movies: results }));
  }

  render() {
    const { movies } = this.state;
    return (
      <ListGroup>
        {movies.map(({ title, episode_id: episodeId }) => (
          <ListGroup.Item key={episodeId}>
            <Link to={`/movies/${episodeId}`}>{title}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default StarWarsMovies;
