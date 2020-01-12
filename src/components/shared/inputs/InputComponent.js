import React from 'react';
import PropTypes from 'prop-types';
import './inputs.scss';

const InputComponent = ({
data,
}) => {
  return (    
    <p>
      <input type="radio" name="radio-group" checked />
      <label for="test1">Apple</label>
    </p>
  );
};

InputComponent.propTypes = {
  data: PropTypes.object,
};

export default InputComponent;