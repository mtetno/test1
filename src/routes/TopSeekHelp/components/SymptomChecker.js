import React from 'react';
import PropTypes from 'prop-types';
import { Col, Label,Row, Image, ButtonToolbar, DropdownButton, MenuItem ,Glyphicon , Form , Tab, Panel, div, Button , h3,h4, span,ControlLabel, InputGroup,FormGroup,FormControl} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './SymptomChecker.scss';
import seekhelp  from '../../../styles/img/seekhelp.png';
import _ from 'lodash';
import { browserHistory } from 'react-router';

const SymptomChecker = ({
data,
dieases,
allDieasesKey,
dieasesKey,
dieasesKeyhandleChange,
toggleSymptomQuestions,
selectedDieases,
selectedDiease,
handleClearSelection,
}) => {
  let header = (
    <div>
      <Row>
        <Form>
          <FormGroup controlId="formInlineSearch">
            <Col md={12} className='nopadR searchbox'>
              <ControlLabel>Please select the ailments you have</ControlLabel>
            </Col>

          </FormGroup>
        </Form>
      </Row>
    </div>
  );
  return (

    <Row className="clearfix">
      <Col sm={12} className="container">
        <Panel  header={header} bsStyle="default"  className='seekhelp-head'>
          <Col md={5} className="left-sec">
            <Row>
            <Col md={12}>
                <div className='img-sec'><Image src={seekhelp} responsive className='center-block'/></div>
                {/*<div className='middle-block'><Button type="submit" className='rotate darkblue'><FontAwesome name='rotate-left' className='icon-18 white' />Rotate</Button></div>*/}

              </Col>
            </Row>
            </Col>
            <Col md={7}>
                <Row>
              <Col md={12} className="right-sec">
                <Row>
                <div className='symptomtype'>
                  <ul>
                    { dieases ? dieases.map((diease, key) => {
                      const selectedDieasesIds = _.map(selectedDieases, 'diease_id');

                      const selected = selectedDieasesIds.includes(diease.id) ? 'selected' : '';
                      return (
                        <li key={key} onClick={(e) => toggleSymptomQuestions(null, null, diease)} className={selected}><a>{diease.name}</a></li>
                      )
                    }) : null }
                  </ul>

                </div>
                <div><Button type="submit"  onClick={ handleClearSelection }  className='custom-btn turtle-green btn btn-default'>None of these</Button></div>
                  <div><Button type="submit" onClick={ () => {  browserHistory.push('/dashboard'); } }  className='custom-btn btn btn-default'>Back</Button></div>
                </Row>
                {/*<div className='middle-block'><Button type="submit" className='diagnosis green'>Start diagnosis</Button></div>*/}

                </Col>
            </Row>

            </Col>
        </Panel>
      </Col>
    </Row>

  );
};

SymptomChecker.propTypes = {
  data: PropTypes.object,
};

export default SymptomChecker;
