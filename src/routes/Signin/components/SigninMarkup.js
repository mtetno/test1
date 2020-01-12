import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row, Button ,Image} from 'react-bootstrap';
import FormBuilder from '../../../components/shared/FormBuilder';
import SocialButton from '../../../components/shared/inputs/SocialButton';
import './LoginPage.scss';
import logoHps from '../../../styles/img/logo-hps.png';

const SigninMarkup = ({
appState,
formData,
updateValue,
social,
signin,
forget,
signup,
}) => {
  return (
    <Grid className='login_background'>
         <Col className='black-stripe'></Col>
        <Col sm={6} md={7} xs={0} />
        <Col sm={6} md={4} xs={12} >
          <Col className='text-center'>
            <Row className='text-center'><Col md={12} className='hps-heading'><Image src={logoHps} responsive /> <strong>HPS</strong> Wellness</Col></Row>
            <Row>
              <Col className='text-center form-container'>
                <form className='form-signin ' data-ember-action='2'>
                  <h2 className='form-signin-heading'>Sign in to HPS Wellness</h2>
                  <p>Enter your details below</p>
                  <Col className='form-group'>
                    <FormBuilder
                      formData={formData}
                      updateValue={updateValue}
                      formType={'input'}
                              />
                  </Col>
                 <Col md={12} className='forgot'> <p className='pull-left '><a onClick={forget}>Forgot password ?</a></p></Col>
                  <Row>
                      <Col xs={12} sm={12} md={3}></Col>
                      <Col xs={12} sm={12} md={12} className='form-group'>
                        <Row>
                          <Col xs={6} sm={6} md={6}>
                            <Button onClick={signin} className='sign-up-btn'>SIGN IN</Button>
                          </Col>

                          <Col xs={6} sm={6} md={6}>
                            <Button onClick={signup} className='sign-up-btn'>SIGN UP</Button>
                          </Col>
                        </Row>
                      </Col>
                  </Row>
                 {/*<Col xs={12} sm={12} md={12} className='or'><span className='text-center'>OR</span></Col>
                  <Row>
                      <Col xs={12} sm={6} md={6}>
                          <Button onClick={(e) => social(e, 'facebook')} className='media-button button-blue'><span aria-hidden="true" className="fa fa-facebook"></span> SIGN IN WITH FACEBOOK</Button>
                      </Col>
                      <Col xs={12} sm={6} md={6}>
                           <Button onClick={(e) => social(e, 'google')} className='media-button button-orange'><span aria-hidden="true" className="fa fa-google-plus"></span> SIGN IN WITH GOOGLE</Button>
                      </Col>
                  </Row>*/}
                  
                </form>
              </Col>
            </Row>
          </Col>
        </Col>
    </Grid>

  );
};

SigninMarkup.propTypes = {
  appState: PropTypes.object,
  formData: PropTypes.array,
  updateValue: PropTypes.func,
  social: PropTypes.func,
  signin: PropTypes.func,
  forget: PropTypes.func,
  signup: PropTypes.func,
};

export default SigninMarkup;