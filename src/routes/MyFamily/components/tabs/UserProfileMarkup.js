import React from 'react';
import PropTypes from 'prop-types';
import { Col, Label,Row, Image, ButtonToolbar, FieldGroup,Form, Button, Grid, DropdownButton, MenuItem ,Glyphicon , Tab, Panel, div , h3,h4, span,ControlLabel, InputGroup,FormGroup,FormControl} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './AddFamilyMemberMarkup.scss';
import userpic  from '../../../../styles/img/user-pic.png';
var header = (
		<div>
			<Row>        
          <Col md={6}>
            <h4><FontAwesome name='long-arrow-left' className='icon-18 grey' /> User Profile</h4>            
          </Col>
          <Col md={6}>            
            <div className='pull-right text-right editprofile'>Edit Profile<FontAwesome name='pencil' className='icon-16 grey' /></div>  
          </Col>           
      </Row>
    </div>
  );
const UserProfile = ({
data,
}) => {
  return (
    <Col className='center-content-exercise my-userprofile'>
      		<Panel  header={header} bsStyle="default">
            <Col md={12} className='userprofile'>              
                <Col md={6} className="outer-box">
                  <Grid fluid className="main-box">
                    <Row>
                      <Col md={3}>
                        <div>
                          <Image src={userpic} responsive thumbnail circle />
                        </div>
                      </Col>
                      <Col md={9}>
                      <Row>
                        <Col md={12}>
                            <div className="pull-right right-corner">SELF</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}  className='nopadding'>
                            <div className="family-name">Rohit Kumar</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <Row>
                            <Col md={6}  className='nopadding'>
                                 <div className="main-side">
                                    <div className="right-side"><FontAwesome name='user' className='icon-14 blue' /></div>
                                    <div className="left-side">Male 48 yrs old</div>
                                  </div>
                            </Col>
                            <Col md={6} className='nopadding'>
                                  <div className="main-side">
                                     <div className="right-side"><FontAwesome name='tint' className='icon-14 blue' /></div>
                                    <div className="left-side">Blood group O+</div>
                                  </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
              </Grid>
            </Col>
            </Col>
            <Col md={12} className='userprofile'>     
            <Form>
              <Col md={6}>
                <h4><FontAwesome  className='icon-18 grey user-info' />Personal Information</h4>                             
                  <FormGroup controlId="formInlineTitle">
                    <Col md={5} className='nopadding'> 
                      <ControlLabel>Title</ControlLabel>
                    </Col>
                    <Col md={7} className='nopadding'> 
                      <p>Mr.</p>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formInlineFirstName">
                    <Col md={5} className='nopadding'> 
                      <ControlLabel>First Name</ControlLabel>
                    </Col>
                    <Col md={7} className='nopadding'> 
                      <p>Rohit</p>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formInlineLastName">
                    <Col md={5} className='nopadding'> 
                      <ControlLabel>Last Name</ControlLabel>
                    </Col>
                    <Col md={7} className='nopadding'> 
                      <p>Kumar</p>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formInlineDOB">
                    <Col md={5} className='nopadding'> 
                      <ControlLabel>Date of Birth</ControlLabel>
                    </Col>
                    <Col md={7} className='nopadding'> 
                      <p>10 January 1972</p>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formInlineAddress1">
                    <Col md={5} className='nopadding'> 
                      <ControlLabel>Address Line 1</ControlLabel>
                    </Col>
                    <Col md={7} className='nopadding'> 
                      <p>20, Madhavi Apartment, AnushaPur</p>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formInlineAddress2">
                    <Col md={5} className='nopadding'> 
                      <ControlLabel>Address Line 2</ControlLabel>
                    </Col>
                    <Col md={7} className='nopadding'> 
                      <p>203-D, Satish Society</p>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formInlineCity">
                    <Col md={5} className='nopadding'> 
                      <ControlLabel>City</ControlLabel>
                    </Col>
                    <Col md={7} className='nopadding'> 
                      <p>Pune</p>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formInlineState">
                    <Col md={5} className='nopadding'> 
                      <ControlLabel>State</ControlLabel>
                    </Col>
                    <Col md={7} className='nopadding'> 
                      <p>Maharashtra</p>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formInlineZipcode">
                    <Col md={5} className='nopadding'> 
                      <ControlLabel>Zip Code</ControlLabel>
                    </Col>
                    <Col md={7} className='nopadding'> 
                      <p>411001</p>
                    </Col>
                  </FormGroup>                 
                
              </Col>
              <Col md={6}>
                <h4><FontAwesome className='icon-18 grey contact-info' />Contact Information</h4>
                <FormGroup controlId="formInlineEmail">
                    <Col md={5} className='nopadding'> 
                      <ControlLabel>E-mail</ControlLabel>
                    </Col>
                    <Col md={7} className='nopadding'> 
                      <p>rohit.kumar@gmail.com</p>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formInlinePrimaryNo">
                    <Col md={5} className='nopadding'> 
                      <ControlLabel>Primary Phone No.</ControlLabel>
                    </Col>
                    <Col md={7} className='nopadding'> 
                      <p>91+ 987654321</p>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formInlineSeconNo">
                    <Col md={5} className='nopadding'> 
                      <ControlLabel>Secondary Phone No.</ControlLabel>
                    </Col>
                    <Col md={7} className='nopadding'> 
                      <p>(022) 22553060</p>
                    </Col>
                  </FormGroup> 
              </Col> 
            </Form>
            </Col> 
  			</Panel>  			
    </Col>
  );
};

UserProfile.propTypes = {
  data: PropTypes.object,
};

export default UserProfile;
