import React from 'react';
import PropTypes from 'prop-types';
import './PageLayout.scss';
import { Col, Navbar } from 'react-bootstrap';

export const PageLayout = ({ children }) => (
  <Col>
    <Navbar className="custom-navbar navbar-fixed-top navbar navbar-default">
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#'><h1>HPS Wellness</h1></a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    <Col className='page-layout__viewport'>
      {children}
    </Col>
  </Col>
);
PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
