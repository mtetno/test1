import React from 'react';
import PropTypes from 'prop-types';
import { Col, Tabs, Tab, Image,Row } from 'react-bootstrap';
import './CenterContentMarkup.scss';
import ProgressTabMarkup from './tabs/ProgressTabMarkup';
import ExerciseTabMarkup from './tabs/ExerciseTabMarkup';
import HomeRemediesMarkup from './tabs/HomeRemediesMarkup';
import AccupressureMarkup from './tabs/AccupressureMarkup';
import tipOfDay from '../../../styles/img/tip-icon.png';
import runningHuman from '../../../styles/img/running-human.png';

const CenterContentMarkup = ({
appState,
data,
tip,
maxPoints,
handleTabSelect,
activeTab,
handleDropdownSelect,
activeDropdown,
handleShowPlayerModal,
handleHomeRemediesModal,
handleAccupressurePointModal,
progressPoints,
changeSchedules
}) => {
  const progress = appState.userProgress ? (appState.userProgress.completeActivitiesCount * 100) / appState.userProgress.incompleteActivitiesCount : 0;
  return (
    <Col className='center-content'>
      <h1>today’s schedule</h1>
      <Col>
        <Tabs defaultActiveKey={activeTab} id='schedule-tabs'>
          <Tab eventKey={1} title='progress'><ProgressTabMarkup changeSchedules={changeSchedules}  progressPoints={progressPoints} maxPoints={maxPoints}  handleDropdownSelect={handleDropdownSelect} activeDropdown={activeDropdown} /></Tab>
          <Tab eventKey={2} title='exercise'><ExerciseTabMarkup appState={appState.recommendation} handleShowPlayerModal={handleShowPlayerModal} /></Tab>
          <Tab eventKey={3} title='Home remedies'><HomeRemediesMarkup appState={appState.recommendation} handleShowPlayerModal={handleHomeRemediesModal} /></Tab>
          <Tab eventKey={4} title='Acupressure'><AccupressureMarkup appState={appState.recommendation  } handleShowPlayerModal={handleAccupressurePointModal} /></Tab>
        </Tabs>
      </Col>
      <Col md={12} className='tip-of-day-wrap no-padding'>
        <Col md={1}>
          <Row>
            <Image src={tipOfDay} responsive />
          </Row>
        </Col>
        <Col md={11}>
          <Col className='header'>tip of the day</Col>
          <Col className='content'>{tip?tip.tipOfTheDay:''}</Col>
        </Col>
      </Col>
      <Col md={12} className='no-padding'>
        <h1 className='secondary'>your progress</h1>
      </Col>
      <Col md={12} className='no-padding progress-wrap'>
        <Col md={12} className='running-icon-wrap'>
          <Image src={runningHuman} responsive className='running-icon' style={{marginLeft: `${progress}%`}}/>
        </Col>
        <Col className='progress-bar'>
          <Col className='progress-bar-point progress-bar-point-blue first' />
          <Col className='progress-bar-point second' />
          <Col className='progress-bar-point third' />
        </Col>
        <Col md={12} className='no-padding progress-bar-text'>
          <Col md={4} className='no-padding text-left'>Illness</Col>
          <Col md={4} className='no-padding text-center'>wellness</Col>
          <Col md={4} className='no-padding text-right'>excellence</Col>
        </Col>
      </Col>
    </Col>
  );
};

CenterContentMarkup.propTypes = {
  data: PropTypes.object,
  handleTabSelect: PropTypes.func,
  activeTab: PropTypes.number,
};

export default CenterContentMarkup;
