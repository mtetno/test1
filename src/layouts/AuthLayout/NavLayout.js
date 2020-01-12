import React from 'react';
import './NavLayout.scss';
import { Col, Navbar, Nav, NavItem, NavDropdown, MenuItem,Image,Badge } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import dashboardLogo from '../../styles/img/logo-main.png';
import maleAvatar from '../../styles/img/male-avatar.png';
import femaleAvatar from '../../styles/img/female-avatar.png';
import { browserHistory } from 'react-router';
export const NavLayout = ({
  userDetails,
  signOut,
  navStates,
  handleSelected
}) =>{
 return(
  <Navbar className='custom-navbar navbar-fixed-top' fluid collapseOnSelect>
    <Navbar.Header  onClick={() =>{ handleSelected("dashboard"); browserHistory.push('/dashboard');}}  className='col-md-3'>
      <Navbar.Brand className='img-band'>
        <a href='#'><Image src={dashboardLogo} responsive /></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Col className='nav-item-wrapper'>
        <Nav className='menu-nav'>
          <NavItem eventKey={1} className={navStates.myHps?"selected":" "}  onClick={() =>{ browserHistory.push('/myhps/mypheno'); handleSelected("myHps"); } } >MY HPS</NavItem>
          <NavItem eventKey={2} className={navStates.myFamily ? "selected":" "}  onClick={() => { browserHistory.push('/myfamily/familymembers'); handleSelected("myFamily"); }}>MY FAMILY</NavItem>
          <NavItem eventKey={3} className={navStates.seekHelp ? "selected":" "}  onClick={() =>{ browserHistory.push('/topseekhelp');handleSelected("seekHelp");}} >SEEK HELP</NavItem>
        </Nav>
        <Nav pullRight>
          {/*<NavItem eventKey={1} href='#'><FontAwesome name='bell' className='icon-18' /><Badge className='notify'>20</Badge></NavItem>*/}

          <NavDropdown className="notification-wrap" eventKey={5} title={<FontAwesome name='bell1' className='icon-18' />} id='dropdown-no-caret'>
            <MenuItem eventKey={5.1}>No Notification</MenuItem>
          </NavDropdown>
          <NavItem eventKey={2} href='#' className='menu-divider' />
          <NavItem eventKey={3} className={navStates.faq ? "selected":" "}  onClick={() =>{ browserHistory.push('/faq');handleSelected("faq");}}><FontAwesome name='info-circle' className='icon-18' /></NavItem>
          <NavItem eventKey={4} href='#' className='menu-divider' />
          <NavDropdown eventKey={5} title={<Image className="navbar-avatar" src={userDetails ? userDetails.gender == 'MALE' ? maleAvatar : femaleAvatar : maleAvatar} responsive />} id='basic-nav-dropdown' className='span-drop last-menu'>
            <MenuItem eventKey={5.1}><FontAwesome name='user' /> My Account</MenuItem>
            <MenuItem eventKey={5.3}><FontAwesome name='cog' /> Setting</MenuItem>
            <MenuItem eventKey={5.2} onClick={signOut} ><FontAwesome name='sign-out' /> Log Out</MenuItem>
          </NavDropdown>
        </Nav>
      </Col>
    </Navbar.Collapse>
  </Navbar>
);

}

export default NavLayout;
