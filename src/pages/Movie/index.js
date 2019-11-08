import React from 'react';
import { Row, Col } from 'react-bootstrap';
import propTypes from 'prop-types';
import { formatedDate } from '../../helpers/date';

class Movie extends React.Component {
  componentIsMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      releaseDate: '',
      director: '',
      openingCrawl: '',
    };
  }

  componentDidMount() {
    this.componentIsMounted = true;
    const { match: { params: { episodeId } = {} } = {} } = this.props;

    this.getFilms(episodeId);
  }

  componentDidUpdate({ match: { params: { episodeId: prevEpisodeId } = {} } = {} }) {
    const { match: { params: { episodeId } = {} } = {} } = this.props;

    if (prevEpisodeId !== episodeId) {
      this.getFilms(episodeId);
    }
  }

  componentWillUnmount() {
    this.componentIsMounted = false;
  }

  getFilms = (episodeId) => fetch(`https://swapi.co/api/films/${episodeId}`)
    .then((res) => res.json())
    .then(({
      title, release_date: releaseDate, director, opening_crawl: openingCrawl,
    }) => {
      this.setState({
        title, releaseDate, director, openingCrawl,
      });
    })

  render() {
    const {
      title,
      releaseDate,
      director,
      openingCrawl,
    } = this.state;

    return (
      <>
        <h1>
          Title:
          <span>{title}</span>
        </h1>
        <Row>
          <Col>
            <p>
              Release date:
              <span className="text-primary font-weight-bold">
                {formatedDate(releaseDate)}
              </span>
            </p>
          </Col>
          <Col>
            <p>
              Director:
              <span className="text-primary font-weight-bold">{director}</span>
            </p>
          </Col>
        </Row>
        <p>{openingCrawl}</p>
      </>
    );
  }
}

Movie.propTypes = {
  match: propTypes.shape(),
};

Movie.defaultProps = {
  match: {},
};

export default Movie;