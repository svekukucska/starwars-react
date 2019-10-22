import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { formatedDate } from '../../helpers/date';

class Movie extends React.Component {
  state = {
    title: '',
    release_date: '',
    director: '',
    opening_crawl: ''
  };

  componentDidMount() {
    const { match: { params: { episodeId } = {} } = {} } = this.props;
    fetch(`https://swapi.co/api/films/${episodeId}`)
      .then(res => res.json())
      .then(({ title, release_date, director, opening_crawl }) => {
        this.setState({ title, release_date, director, opening_crawl });
      });
  }

  render() {
    const { title, release_date, director, opening_crawl } = this.state;
    return (
      <>
        <h1>Title: <span>{title}</span></h1>
        <Row>
          <Col>
          <p>Release date: 
            <span className="text-primary font-weight-bold">
              {formatedDate(release_date)}
            </span>
          </p>
          </Col>
          <Col>
            <p>Director: 
              <span className="text-primary font-weight-bold">{director}</span>
            </p>
          </Col>
        </Row>       
        <p>{opening_crawl}</p>
      </>  
    );
  }
}

export default Movie;
