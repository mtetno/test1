import React from 'react';
import PropTypes from 'prop-types';
import { Col, Label, Row, Image, ButtonToolbar, DropdownButton, MenuItem, Tabs,  Tab, Panel, div , h3, h4, h5, h6, Well, span,ControlLabel, InputGroup,FormGroup,FormControl} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'
import mypheotype  from '../../../../styles/img/mypheno.png';
import './HpsGenericRecommendationsDetail.scss';

const MyPhenotype = ({
phenoType,
userDetails,
appState
}) => {
  const overallInfo=phenoType?phenoType.phenotypeOverallInfo.balancingTheDosha.split('\n'):[];
  return (
   <Col className='center-content-exercise'>
      		<Well>
          <Row>
            <Col className='myphenotype-leftside'>
            <div className='text-center'>
              <h3> My Phenotype</h3>
              <Label bsStyle='default'>{phenoType?phenoType.phenotype : "-"}</Label>
              <Image src={mypheotype} responsive className='center-block myphenotype-left-img' />
              <Row className='center-block'>               
                  <div className='genderblock'>                  
                    <ul>
                      <li><div className='gendername'> Gender </div><div className='genderdetail'> {userDetails?userDetails.gender.toLowerCase().charAt(0).toUpperCase()+userDetails.gender.substr(1).toLowerCase():' '}</div></li>
                      <li><div className='gendername'>Age  </div><div className='genderdetail'>{userDetails?new Date().getFullYear()-parseInt(userDetails.dob.split('-')[2]):23}</div></li>
                    </ul>
                  </div>
              </Row>

            </div>            
            </Col>
            <Col className='myphenotype-rightside'>
              <Col>
                <Tabs defaultActiveKey={1} id='myphenotype-tabs'>
                  <Tab eventKey={1} title='Overall Phenotype'>
                    
                      <Row>
                        <Col md={12}>
                          <h6>Your constitution is predominantly Pitta and Vata.</h6>
                          <ol className='phenotypedetail-tab'>
                              <li className='question-icon'>
                                <h6>What it means</h6>
                                <p>{phenoType?phenoType.phenotypeOverallInfo.whatItMeans:"-"}</p>
                              </li>
                              <li className='brain-icon'>
                                <h6>How it Happen</h6>
                                <p>{phenoType?phenoType.phenotypeOverallInfo.howItHappens:"-"}</p>
                              </li>
                              <li className='calendar-icon'>
                                <h6>What you need to do</h6>
                                <p>{phenoType?phenoType.phenotypeOverallInfo.whatItNeedsToDo:"-"}</p>
                              </li>
                              <li className='balance-icon'>
                                <h6>Balancing the Dosha</h6>
                                <p>{overallInfo[0]}</p>
                                <ul className="hpsdetailcontent">
                                 { 
                                   overallInfo.map((data,index)=>index>1 ? <li key={index}><span className='text'>{data.split('.')[1]}</span></li>:'') }
                                  </ul>
                              </li>
                              <li className='diet-icon'>
                                <h6>Diet</h6>
                                <p>{phenoType?phenoType.phenotypeOverallInfo.diet:"-"}</p>
                              </li>

                          </ol>
                        </Col>
                      </Row>
                  </Tab>
                </Tabs>
              </Col>
            </Col>
          </Row>
          </Well>
    </Col>
  );
};

MyPhenotype.propTypes = {
  data: PropTypes.object,
};

export default MyPhenotype;
