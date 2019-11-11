import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import getIdFromUrl from '../../helpers/url';

class Character extends React.Component {
  componentIsMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    this.componentIsMounted = true;
    const { characterUrl } = this.props;
    fetch(characterUrl).then((res) => res.json())
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
    const { characterUrl } = this.props;
    const id = getIdFromUrl(characterUrl);
    return (
      <li>
        <Link to={`/character/${id}`}>{name}</Link>
      </li>
    );
  }
}

Character.propTypes = {
  characterUrl: propTypes.string,
};

Character.defaultProps = {
  characterUrl: '',
};

export default Character;
