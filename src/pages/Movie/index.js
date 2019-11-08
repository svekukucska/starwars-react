import React from 'react';
import { Row, Col } from 'react-bootstrap';
import propTypes from 'prop-types';
import { formatedDate } from '../../helpers/date';
import Planet from '../../components/Planet/index';

class Movie extends React.Component {
  componentIsMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      releaseDate: '',
      director: '',
      openingCrawl: '',
      planets: [],
    };
  }

  componentDidMount() {
    this.componentIsMounted = true;
    const { match: { params: { episodeId } = {} } = {} } = this.props;
    fetch(`https://swapi.co/api/films/${episodeId}`)
      .then((res) => res.json())
      .then(({
        title, release_date: releaseDate, director, opening_crawl: openingCrawl, planets,
      }) => {
        if (this.componentIsMounted) {
          this.setState({
            title, releaseDate, director, openingCrawl,
          });
        }
      });
  }

  componentWillUnmount() {
    this.componentIsMounted = false;
  }

  render() {
    const {
      title,
      releaseDate,
      director,
      openingCrawl,
      planets,
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
        <h2>Planets</h2>
        <ul>
          {planets.map((planetUrl) => <Planet planetUrl={planetUrl} key={planetUrl} />)}
        </ul>
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
