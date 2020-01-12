import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Label, Image, ButtonToolbar, DropdownButton, MenuItem,Tab,Row,Nav,NavItem,Panel,FormGroup,ControlLabel,FormControl,FieldGroup,InputGroup,Glyphicon } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './HpsGenericRecommendations.scss';
import recommendation from '../../../../styles/img/recommendation.png';
import recommendation1 from '../../../../styles/img/recommendation1.png';
import greenActive from '../../../../styles/img/green-active.png';
import { browserHistory } from 'react-router';
import _ from 'lodash';

const HpsGenericRecommendations = ({
data,
appState
}) => {
 return (
	 
    <Col md={12} className="recommendation-container">
      <Row className="panel-heading">
       	<Col md={6} sm={12} xs={12}>
       	   	<h1>HPS Generic Recommendations</h1>
       	</Col>
       	{/* <Col md={6} sm={12} xs={12}>
       	   	<Row>
       	   		<Col md={4} sm={4} xs={4} >
		       	   	<FormGroup controlId="formControlsSelect">
					      <FormControl componentClass="select" placeholder="select">
					        <option value="select">This Week</option>
					        <option value="other">...</option>
					      </FormControl>
					 </FormGroup>
				</Col>
				<Col md={4} sm={4} xs={4}>
				    	<FormGroup>
      <InputGroup>
        <FormControl type="text" />
        <InputGroup.Addon>
          <Glyphicon glyph="search" />
        </InputGroup.Addon>
      </InputGroup>
    </FormGroup>
				    </Col>
				    <Col md={4} sm={4} xs={4}>
				    	<Row>
			       	   	<Col md={8} className="left-sec"><span>View favourite</span></Col>
			       	   	<Col md={4} className="right-sec"><span><FontAwesome name='star-o' className='icon-18' /></span></Col>
		       	   	</Row>
				    </Col>
       	   		</Row>
       	   </Col> */}
       </Row>
       <Row>
				 {
					 appState.Grecommendation&&appState.Grecommendation.recommendationDTOs?
			   _.sortBy(appState.Grecommendation.recommendationDTOs,"id").map((data)=>
       		<Col md={6} sm={6} key={data.id} xs={12} className="outer-box" onClick={()=>browserHistory.push('/myhps/recommendation_details/'+data.id)}>
       			<Grid fluid className="main-box">
       				<Row>
       					<Col xs={7} className="inner-box" >
       						<div className="date">{data.createdAt}</div>
       						<div className="heading">{data.title}</div>
       						<div className="content">
       						{data.content.slice(0,50)} <a>read more...</a>
       						</div>
       					</Col>
       					<Col xs={5} className="inner-right-box">
       						<Image src={recommendation} responsive />
       					</Col>
       				</Row>
       			</Grid>
       		</Col>):<Col>No Recommendations are available</Col>
				 }
       </Row>
    </Col>
  );
};

HpsGenericRecommendations.propTypes = {
  data: PropTypes.object,
};

export default HpsGenericRecommendations;

