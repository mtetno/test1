import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Col, Glyphicon } from 'react-bootstrap';
import QuestionnaireFormBuilder from '../../../components/shared/QuestionnaireFormBuilder';

const QuestionMarkup = ({
formData,
handleChange,
dependentChange,
fullDate,
handleDependentChange,
signin,
userAnswers,
handleAddMoreChanges,
}) => {
  return (
    <Col id='QuestionMarkup'>
      <QuestionnaireFormBuilder
        signin={signin}
        fullDate={fullDate}
        handleChange={handleChange}
        dependentChange={dependentChange}
        formData={formData}
        userAnswers = {userAnswers}
        handleDependentChange={handleDependentChange}
        handleAddMoreChanges = {handleAddMoreChanges}
      />
    </Col>
  );
};

QuestionMarkup.propTypes = {
  formData: PropTypes.array,
};

export default QuestionMarkup;
