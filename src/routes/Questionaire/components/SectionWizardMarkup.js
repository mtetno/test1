import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ListGroupItem, Col, Glyphicon, ListGroup, ButtonToolbar, Button } from 'react-bootstrap';
import FormBuilder from '../../../components/shared/FormBuilder';
import './SectionWizardMarkup.scss';
import SubSectionWizardMarkup from './SubSectionWizardMarkup';
import OverlayLoader from '../../../components/shared/OverlayLoader';

const SectionWizardMarkup = ({
appState,
currentSection,
currentSubSection,
nextHandler,
backHandler,
handleChange,
dependentChange,
showSymptomQuestions,
toggleSymptomQuestions,
dieases,
allDieasesKey,
dieasesKey,
dieasesKeyhandleChange,
selectedDieases,
selectedDiease,
percentageCompleted,
handleDependentChange,
handleAddMoreChanges,
isTop,
signin,
}) => {
  const questions = appState.questions;
  return (
    <Grid id='SectionWizardMarkup' className="section-wizard">
      <Grid style={{position: 'fixed', zIndex: 99,backgroundColor:'#fff',marginTop:'-20px',paddingTop:'20px'}}>
      <ListGroup className="list-inline" style={{padding: '0px', backgroundColor: '#fff'}}>
        {questions.map((section, index) => {
          const zIndex = questions.length - index;
          const className = index <= currentSection ? 'section-progress-done' : '';
          return <ListGroupItem style={{zIndex: zIndex}} className={`section-progress col-md-4 text-center ${className}`} key={index}>{section.name}</ListGroupItem>
        })}
      </ListGroup>
      </Grid> 
      <SubSectionWizardMarkup
        showSymptomQuestions={showSymptomQuestions}
        toggleSymptomQuestions={toggleSymptomQuestions}
        handleChange={handleChange}
        dependentChange={dependentChange}
        currentSubSection={currentSubSection}
        currentSection={currentSection}
        dieases={dieases}
        allDieasesKey={allDieasesKey}
        dieasesKey={dieasesKey}
        dieasesKeyhandleChange={dieasesKeyhandleChange}
        selectedDieases={selectedDieases}
        selectedDiease={selectedDiease}
        percentageCompleted={percentageCompleted}
        subSections={questions.length ? questions[currentSection].subSections : []}
        appState={appState}
        isTop={isTop}
        handleDependentChange={handleDependentChange}
        nextHandler={nextHandler}
        backHandler={backHandler}
        signin={signin}
        handleAddMoreChanges = {handleAddMoreChanges}
      />
      { appState.fetch ? <OverlayLoader /> : null }
    </Grid>
  );
};

SectionWizardMarkup.propTypes = {
  appState: PropTypes.object,
  signin: PropTypes.object,
  currentSection: PropTypes.number,
  currentSubSection: PropTypes.number,
  nextHandler: PropTypes.func,
  backHandler: PropTypes.func,
  handleChange: PropTypes.func,
  dependentChange : PropTypes.func,
  dieases: PropTypes.array,
};

export default SectionWizardMarkup;
