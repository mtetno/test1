import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col,Row } from 'react-bootstrap';
import LeftSidebar from './LeftSidebar';

const MyfamilyMarkup = ({
appState,
handleTabSelect,
activeTab,
handleDropdownSelect,
activeDropdown,
handleModal,
showModal,
children,
}) => {
  return (
    <Grid id='MyfamilyMarkup' fluid className=''>
    	<Row>
    		<Col md={3}>
    			<LeftSidebar></LeftSidebar>
    		</Col>
        <Col md={9}>
    			{children}
    		</Col>
     	</Row>
    </Grid>
  );
};

MyfamilyMarkup.propTypes = {
  appState: PropTypes.object,
  handleTabSelect: PropTypes.func,
  activeTab: PropTypes.number,
};

export default MyfamilyMarkup;
