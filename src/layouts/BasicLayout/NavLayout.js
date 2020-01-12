import React from 'react';
import './NavLayout.scss';
import { Col, Navbar, Nav, NavItem, NavDropdown, MenuItem,Image,Badge } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import dashboardLogo from '../../styles/img/logo-main.png';
import { browserHistory } from 'react-router';
import maleAvatar from '../../styles/img/male-avatar.png';
import femaleAvatar from '../../styles/img/female-avatar.png';
export const NavLayout = ({
  userDetails,
  signOut,
}) => (
    
  <Navbar className='custom-navbar navbar-fixed-top navbar navbar-default' fluid collapseOnSelect>
    <Navbar.Header  onClick={() => browserHistory.push('/dashboard')}  className='col-md-3'>
      <Navbar.Brand className='img-band'>
        <a href='#'><Image src={dashboardLogo} responsive /></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Col className='nav-item-wrapper'>
        <Nav pullRight>
          <NavDropdown eventKey={5} title={<Image className="navbar-avatar" src={userDetails ? userDetails.gender == 'MALE' ? maleAvatar : femaleAvatar : maleAvatar} responsive />} id='basic-nav-dropdown'>
            <MenuItem eventKey={5.1}>My Account</MenuItem>
            <MenuItem eventKey={5.2} onClick={signOut} >Log Out</MenuItem>
          </NavDropdown>
        </Nav>
      </Col>
    </Navbar.Collapse>
  </Navbar>
);

export default NavLayout;
