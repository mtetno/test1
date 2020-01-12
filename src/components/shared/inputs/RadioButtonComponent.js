import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Image } from 'react-bootstrap';

const RadioButtonComponent = ({
  data,
  handleChange,
  index,
  value,
}) => {
  return (
    <Col className={ value == data.id ? "radio-button-container cursor-pointer active" : "radio-button-container cursor-pointer"} onClick={(event) =>  handleChange(data.id, index)}>
      <Col className="inner">
        <span>{data.text}</span>
      </Col>
    </Col>
  )
}

export default RadioButtonComponent;
