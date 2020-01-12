import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Label, Image, Row ,Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './FamilyMemberUserProfile.scss';
import { browserHistory } from 'react-router';
import userpic from '../../../../styles/img/user-pic.png';
import son from '../../../../styles/img/son.png';
import spouse from '../../../../styles/img/spouse.png';
import daughter from '../../../../styles/img/daughter.png';
import AddMemberComponentMarkup from './AddMemberComponentMarkup.js';


const FamilyMemberUserProfile = ({
data,
appState,
handleStart
}) => {
  return (
    <Col md={12} className="myfamily-container ">
        { appState && appState.dependentVOs &&  appState.dependentVOs.length > 0 ?
        appState.dependentVOs.map((memberProfile) =>
        <AddMemberComponentMarkup key={memberProfile.email}
        firstname={memberProfile.firstName}
        lastName={memberProfile.lastName}
        email={memberProfile.email}
        phone={memberProfile.phone}
        nickName={memberProfile.nickName}
        relationship={memberProfile.relationship}
        id={memberProfile.id}
        handleStart = {handleStart}
        />) : null }
       <Row>
          <Col md={12}>
              <Button type="submit" onClick={()=>browserHistory.push('/myfamily/addmembers')} className='save'>ADD FAMILY MEMBERS</Button>
          </Col>
       </Row>
    </Col>

  );
};

FamilyMemberUserProfile.propTypes = {
  data: PropTypes.object,
  appState: PropTypes.object,
  handleStart : PropTypes.func,
};

export default FamilyMemberUserProfile;
