import React from 'react';

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    fetch(this.props.planetUrl).then((res) => res.json())
      .then((res) => this.setState({ name: res.name }));
  }

  render() {
    return <li key={this.props.key}>{this.state.name}</li>;
  }
}

export default Planet;
