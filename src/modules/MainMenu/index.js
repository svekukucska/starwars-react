import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import navLogo from '../../assets/nav_logo.svg';
import './index.css';
import { getMovies } from '../../helpers/getData';

class MainMenu extends React.Component {
  state = {
    movies: null,
    dropdownOpen: false,
  };
  componentDidMount() {
      getMovies().then(({results}) => {
      const movies = results.sort((a, b) => (a.episode_id > b.episode_id) ? 1 : ((b.episode_id > a.episode_id) ? -1 : 0));
      this.setState({movies});
      });
  };
  handleDropdownOpen = () => {
    this.setState({
      dropdownOpen: true
    });
  }
  handleDropdownClose = () => {
    this.setState({
      dropdownOpen: false
    });
  }
  render() {
    const {
      movies,
      dropdownOpen,
    } = this.state;
    const linkMovieList = (<span onClick={() => this.props.history.push('/movies')}> Star Wars Movies</span>);
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand as={NavLink} to="/">
          <img className="nav-logo" src={navLogo} alt="Star Wars nav logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <NavDropdown variant="tabs" title={linkMovieList} onMouseEnter={this.handleDropdownOpen} onMouseLeave={this.handleDropdownClose} show={dropdownOpen}>
              {movies && movies.map(({ episode_id, title }) => (
                <NavDropdown.Item as={NavLink} to={`/movies/${episode_id}`} key={episode_id}>{title}</NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={NavLink} to="/planets">Planets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
};

export default withRouter(MainMenu);
