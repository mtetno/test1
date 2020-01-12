import React from 'react';
import PropTypes from 'prop-types';
import { Col, Label, Image, ButtonToolbar, DropdownButton, MenuItem,Tab,Row,NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './LeftSidebar.scss';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import { browserHistory } from 'react-router';

const LeftSidebar = ({
data,
}) => {
  return (
    <Row className="main-sidenav" style={{background: '#2c3e50', color: '#FFF'}}> 
        <SideNav highlightColor='#ffffff' highlightBgColor='#192837' selected='#192837' onItemSelection={ (id, parent) =>{if(id!=''){if(id.startsWith("/"))browserHistory.push('/myhps'+id);else browserHistory.push('/myhps/'+id);}else browserHistory.push('/myhps/mypheno') }}>       
            <Nav id="" defaultSelected='mypheno'>
              <NavIcon><FontAwesome name='id-card-o'/></NavIcon>
              <NavText> My Detailed Reports </NavText>
              <Nav id="mypheno" >
                <NavIcon></NavIcon>
                <NavText> My Phenotype </NavText>
              </Nav>
             {/* <Nav id="graphs" >
                <NavIcon></NavIcon>
                <NavText> My Graphs </NavText>
              </Nav>*/
             }
              <Nav id="dosndonts">
                <NavIcon></NavIcon>
                <NavText> Do's & Dont's </NavText>
              </Nav>
            </Nav>
            <Nav id='articles'>
                <NavIcon><FontAwesome name='address-book-o'/></NavIcon>    
                <NavText> Articles For Me </NavText>
            </Nav>
            <Nav id='recommendations'>
                <NavIcon><FontAwesome name='check-square-o'/></NavIcon>
                <NavText> HPS Generic Recommendations </NavText>
            </Nav>
            <Nav id='records'>
                <NavIcon><FontAwesome name='medkit'/></NavIcon>
                <NavText> My Medical Records </NavText>
            </Nav>
        </SideNav>
    </Row>
  );
};

LeftSidebar.propTypes = {
  data: PropTypes.object,
};

export default LeftSidebar;
