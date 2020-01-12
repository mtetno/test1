import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionnaireFormBuilder from './QuestionnaireFormBuilder';

class DependentQuestionnaireFormBuilder extends Component {
  render () {
    const {
      formData,
      fullDate,
      handleDependentChange,
      optionId,
      parentIndex,
    } = this.props;
    let formComponent = null;
    return (
      <QuestionnaireFormBuilder formData={formData} fullDate={fullDate} handleDependentChange={handleDependentChange} optionId={optionId} parentIndex={parentIndex}/>
    );
  }
}

DependentQuestionnaireFormBuilder.propTypes = {
  formData: PropTypes.array,
  fullDate: PropTypes.array,
  handleChange: PropTypes.func,
};

export default DependentQuestionnaireFormBuilder;
