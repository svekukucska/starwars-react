import React from 'react';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import navLogo from '../../assets/nav_logo.svg';
import { connect } from 'react-redux';
import fetchMovies from '../../actions/movies';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      expanded: false,
    };
    this.handleDropdownOpen = this.handleDropdownOpen.bind(this);
    this.handleDropdownClose = this.handleDropdownClose.bind(this);
  }

  componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
  }

  closeMainMenu = () => {
    this.setState({ expanded: false });
  }

  goToMovieList = () => {
    const { history = {} } = this.props;
    history.push('/movies');
    this.closeMainMenu();
  }

  handleDropdownOpen() {
    this.setState({
      dropdownOpen: true,
    });
  }

  handleDropdownClose() {
    this.setState({
      dropdownOpen: false,
    });
  }

  render() {
    const {
      dropdownOpen,
      expanded,
    } = this.state;
    const { movies } = this.props;
    const linkMovieList = (
      <span
        onClick={this.goToMovieList}
        onKeyPress={this.goToMovieList}
        role="link"
        tabIndex="0"
      >
        Star Wars Movies
      </span>
    );
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        onToggle={() => this.setState({ expanded: !expanded })}
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img className="nav-logo" src={navLogo} alt="Star Wars nav logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavDropdown
                variant="tabs"
                title={linkMovieList}
                onMouseEnter={this.handleDropdownOpen}
                onMouseLeave={this.handleDropdownClose}
                show={dropdownOpen}
              >
                {movies && movies.map(({ episode_id: episodeId, title }) => (
                  <NavDropdown.Item as={NavLink} to={`/movies/${episodeId}`} key={episodeId} onClick={this.closeMainMenu}>
                    {title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link as={NavLink} to="/planets" onClick={this.closeMainMenu}>Planets</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

MainMenu.propTypes = {
  history: PropTypes.shape(),
  movies: PropTypes.arrayOf(PropTypes.shape()),
  getMovies: PropTypes.func.isRequired,
};

MainMenu.defaultProps = {
  history: {},
  movies: [],
};

const mapStateToProps = ({ movies }) => {
  return {
    movieList: movies,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => dispatch(fetchMovies()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainMenu));
