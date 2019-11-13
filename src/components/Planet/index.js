import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import getIdFromUrl from '../../helpers/url';

class Planet extends React.Component {
  componentIsMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    this.componentIsMounted = true;
    const { planetUrl } = this.props;
    fetch(planetUrl).then((res) => res.json())
      .then(({ name }) => {
        if (this.componentIsMounted) {
          this.setState({ name });
        }
      });
  }

  componentWillUnmount() {
    this.componentIsMounted = false;
  }

  render() {
    const { name } = this.state;
    const { planetUrl } = this.props;
    const id = getIdFromUrl(planetUrl);
    return (
      <li>
        <Link to={`/planet/${id}`}>{name}</Link>
      </li>
    );
  }
}

Planet.propTypes = {
  planetUrl: propTypes.string,
};

Planet.defaultProps = {
  planetUrl: '',
};

export default Planet;
