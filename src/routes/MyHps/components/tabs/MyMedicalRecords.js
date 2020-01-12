import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Label, Image, ButtonToolbar, DropdownButton,InputGroup,Glyphicon ,Tabs, MenuItem,Tab,Row,Nav,NavItem,Panel,FormGroup,ControlLabel,FormControl,FieldGroup } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './HpsGenericRecommendations.scss';
import artical from '../../../../styles/img/artical.png';
import doc from '../../../../styles/img/doc.png';
import docsec from '../../../../styles/img/doc-sec.png';
import dropimage from '../../../../styles/img/drop-image.png';
import './MyMedicalRecords.scss';
import Dropzone from 'react-dropzone'

const MyMedicalRecords = ({
data,
activeTab,
uploadFile,
documents,
downloadDocuments,
documentData
}) => {
  console.log(documentData.records.documentData);

  return (
    <Col md={12} className="recommendation-container">
    <Row className="panel-heading">
       	<Col md={6}>
       	   	<h1>My Medical Records</h1>
       	</Col>
       	{/* <Col md={6}>
       	   	<Row>
              <Col md={2}></Col>
       	   	{	<Col md={4}>
		       	   	<div className="filter">
                    <FontAwesome name='filter'/>
                </div>
				</Col>
              }
				<Col md={6}>
				    	 <FormGroup>
      <InputGroup>
        <FormControl type="text" />
        <InputGroup.Addon>
          <Glyphicon glyph="search" />
        </InputGroup.Addon>
      </InputGroup>
    </FormGroup>
				    </Col>
       	   		</Row>
       	   </Col> */}
       </Row>
       <Row>
       <Col md={12} className='center-content'>
          <Row className="first-sec">
            <Col md={6}>
              <div className="dropzone">
                <Dropzone accept=".pdf,.jpg,.doc,.png" multiple={false} onDrop={(file1,file2)=>file1[0]&&file1[0].size<10485760?uploadFile(file1):" "}>
                  <p className="center-block">
                      <Image src={dropimage} responsive />
                      Upload New Prescription
                  </p>
                </Dropzone>
              </div>
            </Col>
            <Col md={6}>
              <div className="dropzone">
              <Dropzone accept=".pdf,.jpg,.doc,.png" multiple={false} onDrop={(file1,file2)=>file1[0]&&file1[0].size<10485760?uploadFile(file1):" "}>
              <p>
                      <Image src={dropimage} responsive />
                      Upload New Report
                  </p>
                </Dropzone>
              </div>
            </Col>
          </Row>
       </Col>
        <Col md={12} className='center-content'>
          <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
    <Row className="clearfix">
      <Col sm={12}>
        <Nav bsStyle="tabs">
          <NavItem eventKey="first">
            Prescriptions 
          </NavItem>
          <NavItem eventKey="second">
            reports
          </NavItem>
        </Nav>
      </Col>
      <Col sm={12}>
        <Tab.Content animation>
          <Tab.Pane eventKey="first">
            <Row className="main-sec">
              
             {
               documents&&documents.files.length?
               documents.files.map((file)=>
              <Col sm={4} onClick={()=>downloadDocuments(file.split("/")[8])}>
                  <div className="container-fluid tab-out-box">
                      <Row>
                         <Col xs={4} className="left-sec">
                           <Image src={doc} responsive />
                         </Col> 
                          <Col xs={8} className="right-sec">
                             <Row>
                              <Col xs={12}>
                                  <div className="right-sec-first">
                                    <div className="pull-left">
                                      <h1>Atorvastatin</h1>
                                       <div className="date"><p>24th october 2017</p></div>
                                    </div>
                                    <div className="pull-right"><span className="cross"><FontAwesome name='times'/></span></div>
                                  </div>
                              </Col>
                              <Col xs={12} className="right-sec-second">
                                  <div>
                                    <h1>{file.split("/")[8]}</h1>
                                  </div>
                              </Col>
                             </Row>
                         </Col> 
                      </Row>
                  </div>
             </Col>):"No records Uploaded.."
             }
            
              </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            Tab 2 content
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
        </Col>
       </Row>
    </Col>
  );
};

MyMedicalRecords.propTypes = {
  data: PropTypes.object,
};

export default MyMedicalRecords;

