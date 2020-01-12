import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ListGroupItem, Col,Row, Glyphicon, ListGroup, Image, ButtonToolbar, Button } from 'react-bootstrap';
import './SectionWizardMarkup.scss';
import icon from '../../../styles/img/reward.png';
import QuestionMarkup from './QuestionMarkup';
import QuestionStatusMarkup from './QuestionStatusMarkup';
import SeekHelpMarkup from '../../SeekHelp/components/SeekHelpMarkup';

const SubSectionWizardMarkup = ({
appState,
subSections,
currentSubSection,
currentSection,
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
questions,
isTop,
handleDependentChange,
nextHandler,
backHandler,
signin,
handleAddMoreChanges,
}) => {
  // const data = _.sortBy(subSections, 'id');
  const style = {position:'fixed',right:'100px'};
  const data = subSections;
  const symptomChecker = data.length && data[currentSubSection].questions[0].typeCd == 'symptom_checker' ? true : false;
  return (
    <Grid id='SubSectionWizardMarkup' className="subsection-wizard">
      <Row>
        <Grid style={{position:'fixed',zIndex:'99', backgroundColor: '#fff',marginTop:'36px'}}>
          <ListGroup className="list-inline">
            {data.map((subSection, index) => {
              const className1 = index <= currentSubSection ? 'done' : '';
              const className2 = index < currentSubSection ? 'iconChange' : '';
              return (
                <ListGroupItem className={`subsection-progress col-xs-3 text-center ${className1}`} key={index} style={{paddingTop: '20px'}}>
                  { className2 ? <Col className={`icon ${className2}`} key={index}></Col> : <Image src={require(`../../../styles/img/wizard${index+1}.png`)} /> }
                  <Col className="circle-incomplete">
                    <Col className="circle-incomplete-in"></Col>
                  </Col>
                  <Col className="text">{subSection.name}</Col>
                  <Col className="line-wrap"></Col>
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Grid>
      </Row>
      <Col md={12} style={{marginTop:'162px'}}>
        {
          symptomChecker ?
          <Col md={12}>
            <SeekHelpMarkup
                showSymptomQuestions={showSymptomQuestions}
                toggleSymptomQuestions={toggleSymptomQuestions}
                dieases={dieases}
                allDieasesKey={allDieasesKey}
                dieasesKey={dieasesKey}
                dieasesKeyhandleChange={dieasesKeyhandleChange}
                selectedDieases={selectedDieases}
                selectedDiease={selectedDiease}
                signin={signin}

            />
             <Col md={12}>
                  <ButtonToolbar className="pull-right">
                    { currentSection == 0 && currentSubSection == 0 ? null : <Button onClick={backHandler} className="custom-btn">Back</Button> }
                    <Button onClick={nextHandler} className="custom-btn turtle-green">Next</Button>
                  </ButtonToolbar>
              </Col>
          </Col> :
          <Col md={12}>
            <Row>
              <Col sm={9}>
                <QuestionMarkup
                  signin={signin}
                  handleChange={handleChange}
                  userAnswers = {appState.userAnswers}
                  fullDate={data} formData={data.length ? data[currentSubSection].questions : []}
                  handleDependentChange={handleDependentChange}
                  handleAddMoreChanges = {handleAddMoreChanges}
                  />
                  <Row>
                    <Col md={12}>
                      <Row>
                            <ButtonToolbar className="text-center btn-que pull-left">
                              { currentSection == 0 && currentSubSection == 0 ? null : <Button onClick={backHandler} className="custom-btn">Back</Button> }
                              <Button onClick={nextHandler} className="custom-btn turtle-green">Next</Button>
                            </ButtonToolbar>
                      </Row>
                    </Col>
                  </Row>
              </Col>
              <Col sm={3} style={style}>
                <QuestionStatusMarkup
                    percentageCompleted={percentageCompleted}
                    appState={appState}
                    currentSubSection={currentSubSection}
                    currentSection={currentSection}
                    isTop={isTop}
                  />

              </Col>
            </Row>
          </Col>
        }
      </Col>
    </Grid>
  );
};

SubSectionWizardMarkup.propTypes = {
  data: PropTypes.array,
  dieases: PropTypes.array,
  currentSubSection: PropTypes.number,
  handleChange: PropTypes.func,
  dependentChange : PropTypes.func,
};

export default SubSectionWizardMarkup;
