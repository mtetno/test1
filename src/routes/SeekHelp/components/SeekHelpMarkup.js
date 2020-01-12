import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-bootstrap';
import SymptomChecker from './SymptomChecker';
import SymtomQuestion from './SymtomQuestion';

const SeekHelpMarkup = ({
appState,
handleTabSelect,
activeTab,
handleDropdownSelect,
activeDropdown,
handleModal,
showModal,
showSymptomQuestions,
toggleSymptomQuestions,
dieases,
allDieasesKey,
dieasesKey,
dieasesKeyhandleChange,
selectedDieases,
selectedDiease,
signin
}) => {
  return (
    <Grid id='SeekHelpMarkup' fluid className=''>
    <Row>
    	<Col md={6}>
     <SymptomChecker
      dieases={dieases}
      toggleSymptomQuestions={toggleSymptomQuestions}
      allDieasesKey={allDieasesKey}
      dieasesKey={dieasesKey}
      dieasesKeyhandleChange={dieasesKeyhandleChange}
      selectedDieases={selectedDieases}
      selectedDiease={selectedDiease}
      signin={signin}
    >
    </SymptomChecker>
    	</Col>
    <Col md={6}>
    {  showSymptomQuestions ?
        <SymtomQuestion
          selectedDiease={selectedDiease}
          toggleSymptomQuestions={toggleSymptomQuestions}
        />:
         " "
    }
    	</Col>
    
    </Row>
        
    </Grid>
  );
};

SeekHelpMarkup.propTypes = {
  appState: PropTypes.object,
  handleTabSelect: PropTypes.func,
  dieases: PropTypes.array,
  activeTab: PropTypes.number,
};

export default SeekHelpMarkup;
