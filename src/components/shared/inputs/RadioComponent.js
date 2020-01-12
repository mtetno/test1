import React from 'react';
import PropTypes from 'prop-types';
import './inputs.scss';

const RadioComponent = ({
data,
index,
handleChange,
value,
}) => {
  return (    
    <p className="pull-left" onClick={(event) =>  handleChange(data.id, index)}>
      <input
        type="radio"
        name={`radio_group_${index}`}
        checked={data.id == value}
      />
      <label>{data.text}</label>
    </p>
  );
};

RadioComponent.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  handleChange: PropTypes.func,
  value: PropTypes.any,
};

export default RadioComponent;