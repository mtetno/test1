import React from 'react';
import PropTypes from 'prop-types';
import {Col,Image, ButtonToolbar, Button} from 'react-bootstrap';
import './DialogueBox.scss';
import face from '../../styles/img/callout/Educating_Full.png';
import DATA from '../../config/data.json';

const DialogueBoxEmbeded = ({
data,
handleChange,
index,
value,
signin,
bmi,
}) => {
  const countryData = DATA[signin.userDetails.country.toLowerCase()];
  let calloutText = data.calloutText ? data.calloutText.replace("<<UserName>>", signin ? signin.userDetails.firstName : '') : '';
  let calloutText2 = data.calloutText2 ? data.calloutText2.replace("<<UserName>>", signin ? signin.userDetails.firstName : '') : '';
  return (
      <Col id="dialogue-box" className="dialogue-box-embeded-wrap">
          <Col className="questioner-center inner-page">
              <Col className="questioner-content">
                 <Col><p>Your BMI: {bmi.toFixed(2)}</p></Col>
                 <Col><p>{calloutText}</p></Col>
                 <Col><p>{calloutText2}</p></Col>
                <Col>
                  <ButtonToolbar>
                    {data.calloutOptions ? data.calloutOptions.map((option) => <Button style={{width: 'auto', minWidth: '100px'}} onClick={(event) => handleChange('hide', index, 0, value)} className="custom-btn">{option.optionText}</Button>) : ''}
                  </ButtonToolbar>
                </Col>
              </Col>
          </Col>
          <Col className="image-outer">
              <Col className="image-inner">
                  <Image src={face} responsive className="center-block"/>
              </Col>
          </Col>
      </Col>
  );
};

DialogueBoxEmbeded.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
  index: PropTypes.number,
};

export default DialogueBoxEmbeded;