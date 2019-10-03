import React from 'react';
import './index.scss';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <div className="footer" sticky="bottom">
    <Container className="text-right">
      <span>&copy; Copyright 2019</span>
    </Container>
  </div>
);

export default Footer;
