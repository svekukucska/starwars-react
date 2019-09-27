import React from 'react';
import '../../App.css'; 
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const MainMenu = (props) => (
          <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/home">Logo</Navbar.Brand>
                <Nav className="m-auto">
                  <Nav.Link as={NavLink} to="/movies">Star Wars Movies</Nav.Link>
                  <Nav.Link as={NavLink} to="/planets">Planets</Nav.Link>
                </Nav>
          </Navbar>
);

export default MainMenu;
