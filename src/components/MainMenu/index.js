import React from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import navLogo from '../../assets/nav_logo.svg';
import './index.css';

const MainMenu = (props) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
    <Navbar.Brand as={NavLink} to="/">
      <img className="nav-logo" src={navLogo} alt="Star Wars nav logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="m-auto">
        <Nav.Link as={NavLink} to="/movies">Star Wars Movies</Nav.Link>
        <Nav.Link as={NavLink} to="/planets">Planets</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MainMenu;
