import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import getIdFromUrl from '../../helpers/url';
import { fetchPlanet } from '../../actions/planets';

class Planet extends React.Component {
  componentDidMount() {
    const { planetUrl } = this.props;
    const planetId = getIdFromUrl(planetUrl);

    if (planetId) {
      const { getPlanet } = this.props;
      getPlanet(planetId);
    }
  }

  render() {
    const { name, id } = this.props;

    return (
      <li>
        <Link to={`/planet/${id}`}>{name}</Link>
      </li>
    );
  }
}

Planet.propTypes = {
  planetUrl: propTypes.string,
  name: propTypes.string,
  id: propTypes.string,
  getPlanet: propTypes.func.isRequired,
};

Planet.defaultProps = {
  planetUrl: '',
  name: '',
  id: '',
};

const mapStateToProps = ({ planets = [] }, { planetUrl }) => {
  const planetId = getIdFromUrl(planetUrl);
  const planet = planets.find((element) => element.id === planetId);
  return planet || {};
};

const mapDispatchToProps = {
  getPlanet: fetchPlanet,
};

export default connect(mapStateToProps, mapDispatchToProps)(Planet);
