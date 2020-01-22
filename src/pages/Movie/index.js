import React from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { formatedDate } from '../../helpers/date';
import Planet from '../../components/Planet/index';
import Character from '../../components/Character/index';
import { fetchMovie } from '../../actions/movies';

class Movie extends React.Component {
  componentDidMount() {
    const { match: { params: { movieId } = {} } = {} } = this.props;

    if (movieId) {
      const { getMovie } = this.props;
      getMovie(movieId);
    }
  }

  componentDidUpdate({ match: { params: { movieId: prevMovieId } = {} } = {} }) {
    const { match: { params: { movieId } = {} } = {} } = this.props;

    if (prevMovieId !== movieId) {
      const { getMovie } = this.props;
      getMovie(movieId);
    }
  }

  render() {
    const {
      title,
      release_date: releaseDate,
      director,
      opening_crawl: openingCrawl,
      characters = [],
      planets = [],
    } = this.props;

    return (
      <>
        <h1>
          Title:
          {` ${title}`}
        </h1>
        <Row>
          <Col>
            <p>
              Release date:
              <span className="text-primary font-weight-bold">
                {` ${formatedDate(releaseDate)}`}
              </span>
            </p>
          </Col>
          <Col>
            <p>
              Director:
              <span className="text-primary font-weight-bold">
                {` ${director}`}
              </span>
            </p>
          </Col>
        </Row>
        <p>{openingCrawl}</p>
        <h2>Characters</h2>
        <ul>
          {characters.map((characterUrl) => (
            <Character
              characterUrl={characterUrl}
              key={characterUrl}
            />
          ))}
        </ul>
        <h2>Planets</h2>
        <ul>
          {planets.map((planetUrl) => <Planet planetUrl={planetUrl} key={planetUrl} />)}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (
  { movies = [] },
  { match: { params: { movieId } = {} } = {} },
) => {
  const movie = movies.find((element) => element.id === movieId);
  return movie || {};
};

const mapDispatchToProps = {
  getMovie: fetchMovie,
};

Movie.propTypes = {
  match: propTypes.shape(),
  title: propTypes.string,
  release_date: propTypes.string,
  director: propTypes.string,
  opening_crawl: propTypes.string,
  characters: propTypes.arrayOf(propTypes.string),
  planets: propTypes.arrayOf(propTypes.string),
  getMovie: propTypes.func.isRequired,
};

Movie.defaultProps = {
  match: {},
  title: '',
  release_date: '',
  director: '',
  opening_crawl: '',
  characters: [],
  planets: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
