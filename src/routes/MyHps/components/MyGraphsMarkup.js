import React from 'react';
import PropTypes from 'prop-types';
import { Col, Tabs, Tab, Image,Row } from 'react-bootstrap';
import './MyGraphsMarkup.scss';
import FitnessRegimeAnalysisMarkup from './GraphTabs/FitnessRegimeAnalysisMarkup';
import LifeStyleComparisonMarkup from './GraphTabs/LifeStyleComparisonMarkup';
import DysfunctionComparisonMarkup from './GraphTabs/DysfunctionComparisonMarkup';

const MyGraphsMarkup = ({
data,
handleTabSelect,
activeTab,
handleDropdownSelect,
activeDropdown,
}) => {
  return (
    <Col className='center-content'>
     <Col>
        <Tabs defaultActiveKey={activeTab} id='schedule-tabs'>
          <Tab eventKey={1} title='fitness regime analysis'><FitnessRegimeAnalysisMarkup/></Tab>
          <Tab eventKey={2} title='life style comparison'><LifeStyleComparisonMarkup/></Tab>
          <Tab eventKey={3} title='dysfunction comparison'><DysfunctionComparisonMarkup/></Tab>
        </Tabs>
      </Col>
     </Col>
     );
};

MyGraphsMarkup.propTypes = {
    data: PropTypes.object,
    handleTabSelect: PropTypes.func,
    activeTab: PropTypes.number,
};

export default MyGraphsMarkup;
    