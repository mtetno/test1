import React from 'react';
import PropTypes from 'prop-types';
import { Col, Label, Image, ButtonToolbar, DropdownButton, MenuItem,Tab,Row,NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './LeftSidebar.scss';
import AddFamilyMemberMarkup from './tabs/AddFamilyMemberMarkup';
import FamilyMemberUserProfile from './tabs/FamilyMemberUserProfile';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import { browserHistory } from 'react-router';

const LeftSidebar = ({
data,
children,
}) => {
  return (
      
    <Row className="main-sidenav" style={{background: '#2c3e50', color: '#FFF'}}> 
    <SideNav highlightColor='#ffffff' highlightBgColor='#192837' onItemSelection={ (id, parent) =>{browserHistory.push('/myfamily/'+id) }}>       
        <Nav id='familymembers'>
            <NavIcon></NavIcon>    
            <NavText>  <span><FontAwesome name='group' className='icon-18' /></span> <span>My Family Members</span></NavText>
        </Nav>
        <Nav id='addmembers'>
            <NavIcon></NavIcon>
            <NavText> <span><FontAwesome name='user-plus' className='icon-18' /></span> <span>Add Family Members</span></NavText>
        </Nav>
    </SideNav>
</Row>
 
  );
};

LeftSidebar.propTypes = {
  data: PropTypes.object,
};

export default LeftSidebar;


