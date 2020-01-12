import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col,Image } from 'react-bootstrap';
import FormBuilder from '../../../components/shared/FormBuilder';
import OverlayLoader from '../../../components/shared/OverlayLoader';
import './LoginPage.scss';
import logoHps from '../../../styles/img/logo-hps.png';

const SignupMarkup = ({
appState,
formData,
updateValue,
signup,
}) => {
  return (
    <Grid className='login_background' >
      {/*<Col className='black-stripe'></Col>*/}
        <Row>
          <Grid className='text-center'>
            <Row><Col md={12}><Row className='hps-heading'><Image src={logoHps} responsive /> <strong>HPS</strong> Wellness</Row></Col></Row>
            <Col md={12} sm={12} xs={12} className='text-center form-container'>
               <form className='form-signin 'data-ember-action='2'>
                  <h2 className='form-signup-heading'>Sign up to HPS Wellness</h2>
                  <p>Enter your details below</p>
                  <Col xs={12} sm={6} md={6}>
                    <Row>
                      <Col xs={12} sm={6} md={6}>
                        <div lassName='form-group'>
                          <FormBuilder
                            formData={[formData[0]]}
                            updateValue={updateValue}
                            formType={'input'}
                                  />
                        </div>
                    </Col>
                      <Col xs={12} sm={6} md={6}>
                        <div className='form-group'>
                          <FormBuilder
                            formData={[formData[1]]}
                            updateValue={updateValue}
                            formType={'input'}
                                    />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className='form-group'>
                          <FormBuilder
                            formData={[formData[2]]}
                            updateValue={updateValue}
                            formType={'input'}
                                      />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className='form-group'>
                          <FormBuilder
                            formData={[formData[3]]}
                            updateValue={updateValue}
                            formType={'input'}
                                    />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className='form-group'>
                          <FormBuilder
                            formData={[formData[4]]}
                            updateValue={updateValue}
                            formType={'input'}
                              />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} sm={6} md={6}>
                    <Row>
                      <Col xs={12} sm={6} md={6}>
                        <div className='form-group'>
                          <FormBuilder
                            formData={[formData[5]]}
                            updateValue={updateValue}
                            formType={'date'}
                                />
                        </div>
                      </Col>
                      <Col xs={12} sm={6} md={6}>
                        <div className='form-group'>
                          <FormBuilder
                            formData={[formData[6]]}
                            updateValue={updateValue}
                            formType={'input_radio_group'}
                              />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className='form-group'>
                          <FormBuilder
                            formData={[formData[9]]}
                            updateValue={updateValue}
                            formType={'input'}
                              />
                        </div>
                      </Col>
                      <Col xs={12} sm={6} md={6}>
                        <div className='form-group'>
                          <FormBuilder
                            formData={[formData[8]]}
                            updateValue={updateValue}
                            formType={'input'}
                              />
                        </div>
                      </Col>
                      <Col xs={12} sm={6} md={6}>
                        <div className='form-group'>
                          <FormBuilder
                            formData={[formData[7]]}
                            updateValue={updateValue}
                            formType={'input'}
                                />
                        </div>
                      </Col>
                      <Col md={12}>
                        <Row className='form-group'>
                          <Col md={4} className='pull-right'>
                            <button onClick={signup} className='sign-up-btn btn pull-right' > SIGN UP </button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </form>
              </Col>
          </Grid>
        </Row>
        { appState.fetch ? <OverlayLoader /> : null }
    </Grid>
  );
};

SignupMarkup.propTypes = {
  appState: PropTypes.object,
  formData: PropTypes.array,
  updateValue: PropTypes.func,
  signup: PropTypes.func,
};

export default SignupMarkup;
