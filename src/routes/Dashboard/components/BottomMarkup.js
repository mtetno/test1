import React from 'react';
import PropTypes from 'prop-types';
import { Col, Badge, Image ,Accordion,Panel,div, Tab,Tabs, Row , FormGroup,Table   } from 'react-bootstrap';
import './BottomMarkup.scss';
import FontAwesome from 'react-fontawesome';
import bottommenu from '../../../styles/img/bottom-menu.png';
import homeRemedies from '../../../styles/img/home-remedies.png';
import acupressure from '../../../styles/img/acupressure.png';
import dosanddonts from '../../../styles/img/dos-donts.jpg';


var header = (
    <div>
      <Row>
      <Col md={6}>
        <h5>EXERCISES</h5>
      </Col>
      <Col md={6}>            
           <ul className='time-selection pull-right'>
              <li className='selected'><a>Today</a></li>
              <li ><a>Yesterday</a></li>
              <li ><a>Month</a></li>
           </ul>
      </Col>
      </Row>
        </div>
        );
const BottomMarkup = ({
data,
handleModal,
}) => {
  return (
    <Col className=' container1 container'>
      <Col className='bottom-tab'>
        <div className='myhps-program'>
          <Accordion>
            <Panel header="my hps programs" eventKey="1">
               <Col>
                <Tabs defaultActiveKey={1} id='hpsprogram-tab'>
                  <Tab eventKey={1} title='Exercise'>                    
                      <Row>
                        <Col md={12} >
                          <div className='inner-hpsprogram'>
                            <Panel  header={header} bsStyle="default">
                              <Col md={12} className='nopadding'>
                                  <Table responsive className='hps-table'>
                                    <thead>
                                      <tr>
                                        <th>Name of diseases</th>
                                        <th>Main exersice</th>
                                        <th>NO. OF SET</th>
                                        <th>DURATION</th>
                                        <th>MAIN EXERCISE</th>
                                        <th>NO. OF SET</th>
                                        <th>DURATION</th>
                                        <th>Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Backache</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>
                                        <td>2 -3 MINS</td>
                                        <td>Bhujangasan</td>
                                        <td>2 Sets</td>
                                        <td>10 - 15 Sec</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Diabetes</td>
                                        <td>Brisk Wailking</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Standing leg curls</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Knee Joint Pain</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>                                        
                                        <td>2 -3 MINS</td>
                                        <td>Knee press in</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 red' />Obesity</td>
                                        <td>Jogging</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Flate dumbell press</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='fa-window-close' className='icon-18 red' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Backache</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>
                                        <td>2 -3 MINS</td>
                                        <td>Bhujangasan</td>
                                        <td>2 Sets</td>
                                        <td>10 - 15 Sec</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Diabetes</td>
                                        <td>Brisk Wailking</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Standing leg curls</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Knee Joint Pain</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>                                        
                                        <td>2 -3 MINS</td>
                                        <td>Knee press in</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 red' />Obesity</td>
                                        <td>Jogging</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Flate dumbell press</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='fa-window-close' className='icon-18 red' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Backache</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>
                                        <td>2 -3 MINS</td>
                                        <td>Bhujangasan</td>
                                        <td>2 Sets</td>
                                        <td>10 - 15 Sec</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Diabetes</td>
                                        <td>Brisk Wailking</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Standing leg curls</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Knee Joint Pain</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>                                        
                                        <td>2 -3 MINS</td>
                                        <td>Knee press in</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 red' />Obesity</td>
                                        <td>Jogging</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Flate dumbell press</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='fa-window-close' className='icon-18 red' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Backache</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>
                                        <td>2 -3 MINS</td>
                                        <td>Bhujangasan</td>
                                        <td>2 Sets</td>
                                        <td>10 - 15 Sec</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Diabetes</td>
                                        <td>Brisk Wailking</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Standing leg curls</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Knee Joint Pain</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>                                        
                                        <td>2 -3 MINS</td>
                                        <td>Knee press in</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 red' />Obesity</td>
                                        <td>Jogging</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Flate dumbell press</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='fa-window-close' className='icon-18 red' /></td>
                                      </tr>
                                    </tbody>
                                </Table>
                              </Col>
            
                            </Panel>
                          </div>
                        </Col>
                      </Row>
                  </Tab>
                  <Tab eventKey={2} title='Home remedies'>
                    <Row>
                        <Col md={12} >
                          <div className='inner-hpsprogram'>
                            <Panel  header={header} bsStyle="default">
                              <Col md={12} className='nopadding'>
                                  <Table responsive className='hps-table'>
                                    <thead>
                                      <tr>
                                        <th>Name of diseases</th>
                                        <th>Main exersice</th>
                                        <th>NO. OF SET</th>
                                        <th>DURATION</th>
                                        <th>MAIN EXERCISE</th>
                                        <th>NO. OF SET</th>
                                        <th>DURATION</th>
                                        <th>Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Backache</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>
                                        <td>2 -3 MINS</td>
                                        <td>Bhujangasan</td>
                                        <td>2 Sets</td>
                                        <td>10 - 15 Sec</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Diabetes</td>
                                        <td>Brisk Wailking</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Standing leg curls</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Knee Joint Pain</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>                                        
                                        <td>2 -3 MINS</td>
                                        <td>Knee press in</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 red' />Obesity</td>
                                        <td>Jogging</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Flate dumbell press</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='fa-window-close' className='icon-18 red' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Backache</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>
                                        <td>2 -3 MINS</td>
                                        <td>Bhujangasan</td>
                                        <td>2 Sets</td>
                                        <td>10 - 15 Sec</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Diabetes</td>
                                        <td>Brisk Wailking</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Standing leg curls</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Knee Joint Pain</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>                                        
                                        <td>2 -3 MINS</td>
                                        <td>Knee press in</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 red' />Obesity</td>
                                        <td>Jogging</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Flate dumbell press</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='fa-window-close' className='icon-18 red' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Backache</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>
                                        <td>2 -3 MINS</td>
                                        <td>Bhujangasan</td>
                                        <td>2 Sets</td>
                                        <td>10 - 15 Sec</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Diabetes</td>
                                        <td>Brisk Wailking</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Standing leg curls</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Knee Joint Pain</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>                                        
                                        <td>2 -3 MINS</td>
                                        <td>Knee press in</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 red' />Obesity</td>
                                        <td>Jogging</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Flate dumbell press</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='fa-window-close' className='icon-18 red' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Backache</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>
                                        <td>2 -3 MINS</td>
                                        <td>Bhujangasan</td>
                                        <td>2 Sets</td>
                                        <td>10 - 15 Sec</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Diabetes</td>
                                        <td>Brisk Wailking</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Standing leg curls</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Knee Joint Pain</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>                                        
                                        <td>2 -3 MINS</td>
                                        <td>Knee press in</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 red' />Obesity</td>
                                        <td>Jogging</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Flate dumbell press</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='fa-window-close' className='icon-18 red' /></td>
                                      </tr>
                                    </tbody>
                                </Table>
                              </Col>
            
                            </Panel>
                          </div>
                        </Col>
                      </Row>
                  </Tab>
                  <Tab eventKey={3} title='Accupressure'>
                    <Row>
                        <Col md={12} >
                          <div className='inner-hpsprogram'>
                            <Panel  header={header} bsStyle="default">
                              <Col md={12} className='nopadding'>
                                  <Table responsive className='hps-table'>
                                    <thead>
                                      <tr>
                                        <th>Name of diseases</th>
                                        <th>Main exersice</th>
                                        <th>NO. OF SET</th>
                                        <th>DURATION</th>
                                        <th>MAIN EXERCISE</th>
                                        <th>NO. OF SET</th>
                                        <th>DURATION</th>
                                        <th>Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Backache</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>
                                        <td>2 -3 MINS</td>
                                        <td>Bhujangasan</td>
                                        <td>2 Sets</td>
                                        <td>10 - 15 Sec</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Diabetes</td>
                                        <td>Brisk Wailking</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Standing leg curls</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Knee Joint Pain</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>                                        
                                        <td>2 -3 MINS</td>
                                        <td>Knee press in</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 red' />Obesity</td>
                                        <td>Jogging</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Flate dumbell press</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='fa-window-close' className='icon-18 red' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Backache</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>
                                        <td>2 -3 MINS</td>
                                        <td>Bhujangasan</td>
                                        <td>2 Sets</td>
                                        <td>10 - 15 Sec</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Diabetes</td>
                                        <td>Brisk Wailking</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Standing leg curls</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Knee Joint Pain</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>                                        
                                        <td>2 -3 MINS</td>
                                        <td>Knee press in</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 red' />Obesity</td>
                                        <td>Jogging</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Flate dumbell press</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='fa-window-close' className='icon-18 red' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Backache</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>
                                        <td>2 -3 MINS</td>
                                        <td>Bhujangasan</td>
                                        <td>2 Sets</td>
                                        <td>10 - 15 Sec</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Diabetes</td>
                                        <td>Brisk Wailking</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Standing leg curls</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Knee Joint Pain</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>                                        
                                        <td>2 -3 MINS</td>
                                        <td>Knee press in</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 red' />Obesity</td>
                                        <td>Jogging</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Flate dumbell press</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='fa-window-close' className='icon-18 red' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Backache</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>
                                        <td>2 -3 MINS</td>
                                        <td>Bhujangasan</td>
                                        <td>2 Sets</td>
                                        <td>10 - 15 Sec</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Diabetes</td>
                                        <td>Brisk Wailking</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Standing leg curls</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 green' />Knee Joint Pain</td>
                                        <td>Spot Marching</td>
                                        <td>01</td>                                        
                                        <td>2 -3 MINS</td>
                                        <td>Knee press in</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='check-square' className='icon-18 green' /></td>
                                      </tr>
                                      <tr>
                                        <td><FontAwesome name='circle' className='icon-8 red' />Obesity</td>
                                        <td>Jogging</td>
                                        <td>01</td>
                                        <td>40+ MINS</td>
                                        <td>Flate dumbell press</td>
                                        <td>1 To 3 Sets</td>
                                        <td>12 TO 16 Times</td>
                                        <td><FontAwesome name='fa-window-close' className='icon-18 red' /></td>
                                      </tr>
                                    </tbody>
                                </Table>
                              </Col>
            
                            </Panel>
                          </div>
                        </Col>
                      </Row>
                  </Tab>                  
                </Tabs>
              </Col>
            </Panel>    
          </Accordion>
          </div>            
      </Col>
    </Col>
  );
};

BottomMarkup.propTypes = {
  data: PropTypes.object,
};

export default BottomMarkup;
