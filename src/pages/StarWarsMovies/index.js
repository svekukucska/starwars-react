import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import fetchMovies from '../../actions/movies';

class StarWarsMovies extends React.Component {
  componentDidMount() {
    const { getMovies = () => {} } = this.props;
    getMovies();
  }

  render() {
    const { movies } = this.props;
    return (
      <ListGroup>
        {movies.map(({ title, id }) => (
          <ListGroup.Item key={id + Math.random()}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies,
});

const mapDispatchToProps = {
  getMovies: fetchMovies,
};

StarWarsMovies.propTypes = {
  getMovies: propTypes.func.isRequired,
  movies: propTypes.arrayOf(propTypes.shape),
};

StarWarsMovies.defaultProps = {
  movies: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsMovies);
