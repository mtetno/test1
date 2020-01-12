import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Col, Glyphicon, Image } from 'react-bootstrap';
import humanAvtar from '../../../styles/img/avatar-blue.png';
import scanner1  from '../../../styles/img/scanner-1.png';
import './QuestionStatusMarkup.scss';

const QuestionStatusMarkup = ({
appState,
percentageCompleted,
currentSubSection,
currentSection,
}) => {
  const questions = appState.questions;
  return (
    <Col>
    <Col id='QuestionStatusMarkup' className="question-status" style={{}}>
      <h1>ANALYZING <span class="blue-text"> {questions.length ? questions[currentSection].name : ''}</span></h1>
      <h2>{percentageCompleted}%</h2>
      <Col className="text-center">
       

        <div className="blue-avtar">
          <div className="show-div">
            <div className="scanner1"><Image src={scanner1} /></div>
          </div>
          <Image src={humanAvtar} />
        </div>

      </Col>
    </Col>
    </Col>
  );
};

QuestionStatusMarkup.propTypes = {
  appState: PropTypes.object,
};

export default QuestionStatusMarkup;