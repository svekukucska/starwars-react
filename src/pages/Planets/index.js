import React from 'react';
import {
  ListGroup,
  Image,
  Row,
  Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import thousandsSeparators from '../../helpers/thousandsSeparators';
import fetchPlanets from '../../actions/planets';
import getIdFromUrl from '../../helpers/url';

class Planets extends React.Component {
  componentDidMount() {
    const { getPlanets = () => {} } = this.props;
    getPlanets();
  }

  render() {
    const { planets } = this.props;

    return (
      <ListGroup>
        {planets.map(({
          name,
          url: urlPlanetsKey,
          population,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          gravity,
          terrain,
          surface_water: surfaceWater,
          climate,
        }) => (
          <ListGroup.Item className="text-secondary bg-light" key={`${getIdFromUrl(urlPlanetsKey)}_${name}`}>
            <Row className="p-0">
              <Col xs={12} md={6} className="p-3">
                <Image src={`https://starwars-visualguide.com/assets/img/planets/${getIdFromUrl(urlPlanetsKey)}.jpg`} fluid className="mx-auto" />
              </Col>
              <Col className="p-3 text-line-height">
                <h3 className="headings-padding">
                  <span>{`${name}`}</span>
                </h3>
                <p>
                  <span>Population:</span>
                  <span>{` ${thousandsSeparators(population)}`}</span>
                </p>
                <p>
                  <span>Rotation Period:</span>
                  <span>{` ${rotationPeriod} days`}</span>
                </p>
                <p>
                  <span>Orbital Period:</span>
                  <span>{` ${thousandsSeparators(orbitalPeriod)} days`}</span>
                </p>
                <p>
                  <span>Diameter:</span>
                  <span>{` ${thousandsSeparators(diameter)} km`}</span>
                </p>
                <p>
                  <span>Gravity:</span>
                  <span className="text-capitalize">{` ${gravity}`}</span>
                </p>
                <p>
                  <span>Terrain:</span>
                  <span className="text-capitalize">{` ${terrain}`}</span>
                </p>
                <p>
                  <span>Surface Water:</span>
                  <span>{` ${surfaceWater}%`}</span>
                </p>
                <p>
                  <span>Climate:</span>
                  <span className="text-capitalize">{` ${climate}`}</span>
                </p>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

const mapStateToProps = ({ planets }) => ({
  planets,
});

const mapDispatchToProps = {
  getPlanets: fetchPlanets,
};

Planets.propTypes = {
  getPlanets: propTypes.func.isRequired,
  planets: propTypes.arrayOf(propTypes.shape),
};

Planets.defaultProps = {
  planets: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
