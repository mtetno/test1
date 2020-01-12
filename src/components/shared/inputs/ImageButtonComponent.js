import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Image } from 'react-bootstrap';
import exerciseSpotMarching from '../../../styles/img/no_image.png';

const ImageButtonComponent = ({
  data,
  handleChange,
  index,
  value,
}) => {
  return (
    <Col className="radio-image-container cursor-pointer" onClick={(event) =>  handleChange(data.id, index)}>
      <Col className="radio-image-wrap">
        <Col className={ value == data.id ? "radio-image active" : "radio-image"}>
          <Image style={{width: '100%'}} src={data.media ? require(`../../../styles/img/icons/${data.media.name}`) : exerciseSpotMarching} />
        </Col>
        <Col  className="radio-image-text">
          <span>{data.text}</span>
        </Col>
      </Col>
    </Col>
  )
}

export default ImageButtonComponent;
