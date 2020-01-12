import React from 'react';
import PropTypes from 'prop-types';
import './inputs.scss';
import _ from 'lodash';

const CheckboxComponent = ({
checkboxOptions,
data,
index,
handleChange,
value,
}) => {
  const noObject = _.find(checkboxOptions, 'text', 'NO');
  return (    
    
    <p className="pull-left" onClick={(event) =>  {
        let newValue = value ? value : [];
        if (data.text == 'NO') {
          newValue = [];
          newValue.push(data.id);
        } else {
          if (value && value.includes(noObject.id)) {
            newValue = [];
            newValue.push(data.id);
          } else {
            if (value && value.includes(data.id)) {
              value.splice(value.indexOf(data.id), 1);
              newValue = value;
            } else {
              newValue.push(data.id);
            }
          }
        }
        handleChange(newValue, index)}
      }>
      <input
        type="checkbox"
        name={`radio_group_${index}`}
        checked={value && value.includes(data.id)}
      />
      <label>{data.text}</label>
    </p>
  );
};

CheckboxComponent.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  handleChange: PropTypes.func,
  value: PropTypes.array,
};

export default CheckboxComponent;