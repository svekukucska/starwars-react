import React from 'react';
import propTypes from 'prop-types';

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
    return <li>{name}</li>;
  }
}

Planet.propTypes = {
  planetUrl: propTypes.string,
};

Planet.defaultProps = {
  planetUrl: '',
};

export default Planet;
