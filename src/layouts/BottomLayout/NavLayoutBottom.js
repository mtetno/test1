import React from 'react';
import './NavLayoutBottom.scss';
import { Col, Navbar, Nav, NavItem, NavDropdown, MenuItem,Grid } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export const NavLayoutBottom = () => (
  <Grid className='col-md-12'>
 <Col className='col-md-4' className="text-center"><Navbar className='custom-navbar2' fixedBottom  collapseOnSelect>
    <Navbar.Collapse>
      <Col className='nav-item-wrapper'>
        <Nav>
          <NavItem eventKey={1} href='#'>MY REPORT</NavItem>
          <NavItem eventKey={2} href='#'>MY ARTICLES</NavItem>
          <NavItem eventKey={3} href='#'>GENERIC RECOMMANDATIONS</NavItem>
          <NavItem eventKey={4} href='#'>MY MEDICAL RECORDS</NavItem>
          <NavItem eventKey={5} href='#'>MY PARAMETERS</NavItem>
          <NavItem eventKey={6} href='#'>MY HPS PROBLEMS</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href='#'><FontAwesome name='window-minimize' /></NavItem>
          <NavItem eventKey={2} href='#'><FontAwesome name='expand'  /></NavItem>
        </Nav>
      </Col>
    </Navbar.Collapse>
  </Navbar>
  </Col>
 
  </Grid>
);

export default NavLayoutBottom;