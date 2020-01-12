import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row, Button, Image } from 'react-bootstrap';
import SymptomChecker from './SymptomChecker';
import SymtomQuestion from './SymtomQuestion';
import symtomerCheck3 from '../../../styles/img/symtomerCheck3.png';
import SymptomsChecker from '../../../components/shared/modal/SymptomCheckerModelComponent.js';

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
handleClearSelection,
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
      handleClearSelection = {handleClearSelection}
    >
    </SymptomChecker>
    	</Col>
    <Col md={6}>


    {  showSymptomQuestions ?
        <SymtomQuestion
          selectedDiease={selectedDiease}
          toggleSymptomQuestions={toggleSymptomQuestions}
          handleModal={handleModal}
        />:
         <Row>
            <div className='arrow_box'>
              Hello Manas, please select the aliments that you have.Based on your responses I might ask you futher questions to know exact nature of the aliment.
            </div>
            <div className='img-syptom'><Image src={symtomerCheck3} /></div>
          </Row>
    }
    	</Col>
     <SymptomsChecker showModal={showModal} handleModal={handleModal} />
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
