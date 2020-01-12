import React from 'react';
import Loader from 'halogen/MoonLoader';
import { Col } from 'react-bootstrap';

const OverlayLoader = () => {
  return (
    <Col className='overlay'>
      <Col className='overlay-content'>
        <Loader color='#fff' size='80px' margin='4px' />
      </Col>
    </Col>
  );
};

export default OverlayLoader;
