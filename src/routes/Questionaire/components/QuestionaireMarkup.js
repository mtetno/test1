import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Col, Glyphicon,Image,Row } from 'react-bootstrap';
import FormBuilder from '../../../components/shared/FormBuilder';
import './QuestionaireMarkup.scss';
import character from '../../../styles/img/callout/Happy_welcome_Full.png';
import FontAwesome from 'react-fontawesome';


const QuestionaireMarkup = ({
appState,
handleStart,
signin,
}) => {
  const { userDetails } = signin;
  return (
    <Grid id='QuestionaireMarkup' className="questionair-container">
        <Col md={4}>
            <Image src={character} responsive  className="questioner-character"/>
        </Col>
        <Col md={5} className="questioner-center">
            <div className="questioner-content">
              <p>Hi <span className="name" >{userDetails.firstName},</span></p>
              <div>Congratulations on deciding to take the steering wheel of your health into your own hands. I am Hena, your personal Health Navigator.</div>
            </div> 
            <Row><Button type="submit" className='questioner-button' onClick={handleStart}>OK LETS GO <FontAwesome name='long-arrow-right' className='icon-18' /></Button></Row>
        </Col>
        <Col md={3} className="center-block">
        </Col>
    </Grid>
  );
};

QuestionaireMarkup.propTypes = {
  appState: PropTypes.object,
  formData: PropTypes.array,
  updateValue: PropTypes.func,
  social: PropTypes.func,
};

export default QuestionaireMarkup;
