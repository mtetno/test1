import React from 'react';
import PropTypes from 'prop-types';
import { Col, Label,Row, Image, ButtonToolbar, DropdownButton, MenuItem ,Glyphicon , Form , Tab, Panel, div, Button , h3,h4, span,ControlLabel, InputGroup,FormGroup,FormControl,Input} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './SymptomChecker.scss';
import seekhelp  from '../../../styles/img/seekhelp.png';
import SliderComponentSecond from '../../../components/shared/inputs/SliderComponentSecond';
import RadioComponent from '../../../components/shared/inputs/RadioComponent';

const SymptomQuestion = ({
data,
selectedDiease,
toggleSymptomQuestions,
handleModal,
}) => {
  const yearOptions = [];
  for (var i = 1998; i < 2018; i++) {
    yearOptions.push(i);
  }
  return (    
    <Col className="clearfix symtonques">
    
        <Col sm={12} className="container">
            <h3><FontAwesome name='medkit' className='icon-28 red' />The Following questions will help you to the right place</h3>
        </Col>
        <Col sm={12} className="container">
            <div className='middle-content'>
            { selectedDiease ?
                <ol>
                    { selectedDiease ? selectedDiease.intensityMin != '0' || selectedDiease.intensityMax != '0' ? <li style={{listStyle: 'none'}}>
                        <h5>IDENTIFY THE INTENSITY</h5>
                        <Col className='solution-answer'>
                            <h5>Whenever the discomfort happens, what is its intensity?</h5>
                            <SliderComponentSecond domain={[1,10]} defaultValues={[1]} index={'intensity'} value={null} handleChange={toggleSymptomQuestions} />
                        </Col>
                    </li> : null : null }
                    {selectedDiease.frequencyMin != '0' || selectedDiease.frequencyMax != '0' ? <li style={{listStyle: 'none'}}>
                        <h5>IDENTIFY THE FREQUENCY</h5>
                        <Col className='col-md-12 no-padding solution-answer'>
                          <h5>How often the discomfort happens? (Days per week)</h5>   
                          <Col md={12} className="no-padding">
                            <Col md={6} style={{paddingBottom: '20px'}}>
                                <FormControl
                                  type={'text'}
                                  onChange={(event) => toggleSymptomQuestions(event.target.value, 'frequency')}
                                />
                            </Col>
                            <Col md={6} style={{paddingBottom: '20px'}}>
                                <FormControl
                                  componentClass="select"
                                  placeholder="select"
                                  onChange={(event) => toggleSymptomQuestions(event.target.value, 'frequency_unit')}
                                  >
                                  <option value='Day'>Days</option>
                                  <option value='Week'>Weeks</option>
                                  <option value='Month'>Months</option>
                                </FormControl>
                            </Col>
                          </Col>                       
                        </Col>                        
                    </li> : null }
                    {selectedDiease.intensityMin != '0' || selectedDiease.intensityMax != '0'
                    || selectedDiease.durationMin != '0' || selectedDiease.durationMax != '0'
                    || selectedDiease.frequencyMin != '0' || selectedDiease.frequencyMax != '0'
                    || selectedDiease.lossOfActivityMin != '0' || selectedDiease.lossOfActivityMax != '0' ? <li style={{listStyle: 'none'}}>
                        <h5>IDENTIFY SINCE WHEN</h5>
                        <Col className='solution-answer'>
                          <h5>Since when you are facing this discomfort</h5>   
                          <FormControl
                            componentClass="select"
                            placeholder="select"
                            onChange={(event) => toggleSymptomQuestions(event.target.value, 'since')}
                          >
                            { yearOptions.map((option, key) => <option key={key} value={option}>{option}</option>)}
                          </FormControl>                         
                        </Col>                        
                    </li> : null }
                    {selectedDiease.durationMin != '0' || selectedDiease.durationMax != '0' ? <li style={{listStyle: 'none'}}>
                        <h5>IDENTIFY THE DURATION</h5>
                        <Col className='col-md-12 no-padding solution-answer'>
                          <h5>Upon onset, how long does the discomfort stays?</h5>   
                          <Col md={12} className="no-padding">
                            <Col md={6} style={{paddingBottom: '20px'}}>
                                <FormControl
                                  type={'text'}
                                  onChange={(event) => toggleSymptomQuestions(event.target.value, 'duration')}
                                />
                            </Col>
                            <Col md={6} style={{paddingBottom: '20px'}}>
                                <FormControl
                                  componentClass="select"
                                  placeholder="select"
                                  onChange={(event) => toggleSymptomQuestions(event.target.value, 'duration_unit')}
                                  >
                                  <option value='Day'>Minutes</option>
                                  <option value='Week'>Hours</option>
                                  <option value='Month'>Days</option>
                                </FormControl>
                            </Col>
                          </Col>                       
                        </Col>                        
                    </li> : null }
                    {selectedDiease.lossOfActivityMin != '0' || selectedDiease.lossOfActivityMax != '0' ? <li style={{listStyle: 'none'}}>
                        <h5>IDENTIFY LOSS OF ACTIVITY</h5>
                        <Col className='col-md-12 no-padding solution-answer'>
                          <h5>What is the severness of your discomfort?</h5>  
                          <Col className="col-md-12 no-padding"><RadioComponent index={'loss_of_activity'} handleChange={toggleSymptomQuestions} data={{id: 1, text: 'Had to stop the work for 2 hours or lesser time.'}} /></Col>
                          <Col className="col-md-12 no-padding"><RadioComponent index={'loss_of_activity'} handleChange={toggleSymptomQuestions} data={{id: 2, text: 'Had to visit a doctor.'}} /></Col>
                          <Col className="col-md-12 no-padding"><RadioComponent index={'loss_of_activity'} handleChange={toggleSymptomQuestions} data={{id: 3, text: 'Had to take leave.'}} /></Col>
                          <Col className="col-md-12 no-padding"><RadioComponent index={'loss_of_activity'} handleChange={toggleSymptomQuestions} data={{id: 4, text: 'Had to go to hospital.'}} /></Col>
                        </Col>                        
                    </li> : null }
                </ol> : null
              }
            </div>
            <div className='next-block pull-right'><Button type="submit" className='next green' onClick={(e) => handleModal(e, true)}>Done</Button></div>
        </Col>

    </Col>

  
  );
};

SymptomQuestion.propTypes = {
  data: PropTypes.object,
};

export default SymptomQuestion;
