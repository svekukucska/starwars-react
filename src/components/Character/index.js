import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import getIdFromUrl from '../../helpers/url';
import fetchCharacter from '../../actions/characters';

class Character extends React.Component {
  componentDidMount() {
    const { characterUrl } = this.props;
    const characterId = getIdFromUrl(characterUrl);

    if (characterId) {
      const { getCharacter } = this.props;
      getCharacter(characterId);
    }
  }

  render() {
    const { name, id } = this.props;

    return name ? (
      <li>
        <Link to={`/character/${id}`}>{name}</Link>
      </li>
    )
      : null;
  }
}

Character.propTypes = {
  characterUrl: propTypes.string,
  name: propTypes.string,
  id: propTypes.string,
  getCharacter: propTypes.func.isRequired,
};

Character.defaultProps = {
  characterUrl: '',
  name: '',
  id: '',
};

const mapStateToProps = ({ characters = [] }, { characterUrl }) => {
  const characterId = getIdFromUrl(characterUrl);
  const character = characters.find((element) => element.id === characterId);
  return character || {};
};

const mapDispatchToProps = {
  getCharacter: fetchCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
