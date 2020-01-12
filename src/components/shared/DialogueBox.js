import React from 'react';
import PropTypes from 'prop-types';
import {Col,Image, ButtonToolbar, Button} from 'react-bootstrap';
import './DialogueBox.scss';
import face from '../../styles/img/callout/Educating_Full.png';
import DATA from '../../config/data.json';

const DialogueBox = ({
data,
handleChange,
index,
value,
signin,
options,
}) => {
  const countryData = DATA[signin.userDetails.country.toLowerCase()];
  let calloutText = data.calloutText ? data.calloutText.replace("<<UserName>>", signin ? signin.userDetails.firstName : '') : '';
  calloutText = data.calloutText ? calloutText.replace("<<CountryName>>", signin ? signin.userDetails.country : '') : '';
  calloutText = data.calloutText ? calloutText.replace("<<ActualPercentage>>", signin ? options ? countryData[options.text.toUpperCase()] : '' : '') : '';
  calloutText = data.calloutText ? calloutText.replace("<<PositionInTheList>>", signin ? options ? countryData[options.text.toUpperCase()+ ' position'] : '' : '') : '';
  calloutText = data.calloutText ? calloutText.replace("<<his/her>>", signin ? signin.userDetails.gender == 'MALE' ? 'his' : 'her' : '') : '';
  return (
  		<Col id="dialogue-box" className="dialogue-box-wrap">
	        <Col className="questioner-center">
	            <Col className="questioner-content">
                 <Col>{calloutText}</Col>
                <Col>
                  <ButtonToolbar>
                    {data.calloutOptions ? data.calloutOptions.map((option) => <Button style={{width: 'auto', minWidth: '100px'}} onClick={(event) => handleChange('hide', index, 0, value)} className="custom-btn">{option.optionText}</Button>) : <Button style={{width: 'auto', minWidth: '100px'}} onClick={(event) => handleChange('hide', index, 0, value)} className="custom-btn">OK</Button>}
                  </ButtonToolbar>
                </Col>
	            </Col>
	        </Col>
	        <Col className="image-outer">
	            <Col className="image-inner">
	               	<Image src={data.media ? require(`../../styles/img/callout/${data.media.name}`) : face } responsive className="center-block"/>
	            </Col>
	        </Col>
      </Col>
  );
};

DialogueBox.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
  index: PropTypes.number,
};

export default DialogueBox;