import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import getMovies from '../../helpers/getData';


class StarWarsMovies extends React.Component {
  componentIsMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.componentIsMounted = true;
    getMovies().then(({ results }) => {
      if (this.componentIsMounted) {
        this.setState({ movies: results });
      }
    });
  }

  componentWillUnmount() {
    this.componentIsMounted = false;
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
