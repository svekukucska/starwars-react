import React from 'react';

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    const { planetUrl } = this.props;
    fetch(planetUrl).then((res) => res.json())
      .then(({ name }) => this.setState({ name }));
  }

  render() {
    const { name } = this.state;
    return <li>{name}</li>;
  }
}

export default Planet;
