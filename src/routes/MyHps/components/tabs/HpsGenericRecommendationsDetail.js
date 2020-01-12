import React from 'react';
import PropTypes from 'prop-types';
import { Col, Label,Row, Image, ButtonToolbar, DropdownButton, MenuItem ,Glyphicon ,Button, Tab, Panel, div , h3,h4, span,ControlLabel, InputGroup,FormGroup,FormControl} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import bpscreening  from '../../../../styles/img/bpscreening.png';
import './HpsGenericRecommendationsDetail.scss';
import HPSGenericRecommendationsdetail  from '../../../../styles/img/HPSGenericRecommendationsdetail.png';
import { browserHistory } from 'react-router';

var header = (
		<div>
			<Row>
			<Col md={6}>
        <h4><FontAwesome name='long-arrow-left' onClick={()=>browserHistory.push('/myhps/recommendations/') } className='icon-18 grey cursor-pointer'/> Hps Generic Recommendations</h4>
      </Col>
      <Col md={6}>  

       {/* { <Col md={4}>
                <FormGroup controlId="formControlsSelect">
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">This Week</option>
                  <option value="other">Last Week</option>
                </FormControl>
                </FormGroup>
        </Col>
        <Col md={4} className='nopadding'>
              <FormGroup>
                <InputGroup className='searchbox'>
                  <FormControl type="text" />
                  <InputGroup.Addon>
                    <Glyphicon glyph="search" />
                  </InputGroup.Addon>
                </InputGroup>
              </FormGroup>
        </Col>
       } 
        <Col md={4} className='nopadding'>
              
                  <Col md={8} className="left-sec text-right"><span>View favourite</span></Col>
                  <Col md={4} className="right-sec pull-right"><span><FontAwesome name='star-o' className='icon-18 grey' /></span></Col>
                
        </Col>	
        */}	
      </Col>
      </Row>
        </div>
        );
const HpsGenericRecommendationsDetail = ({
appState,recommendationId
}) => {
  return (
   <Col className='center-content-exercise'>
      		<Panel  header={header} bsStyle="default">
    			<Col md={12}>
    				{/* <Row>
    					<div className='pull-right detail-rigthicon'>
    						<FontAwesome name='calendar' className='icon-15' />
    						<FontAwesome name='share-square-o' className='icon-15' />
    						<FontAwesome name='check-square' className='icon-15' />
    					</div>
    				</Row>   */}

            </Col>
            {
             appState && appState.Grecommendation?appState.Grecommendation.recommendationDTOs.map((recommendation)=>{ return(recommendation.id==recommendationId ?         			
        		
        		<Col md={12} key={recommendation.id}>
            <Row className='nomargin'>
                  <h3>{recommendation.title}</h3>
                  <div className='date'>10 Oct 2017</div>
                {/* <span className='btn-section'>
                  <Button type="submit" className='setreminder blue'><span className='icon-18 white calendar-icon15'></span>Set Reminder </Button>
                  <Button type="submit" className='share blue'><FontAwesome name='share-alt' className='icon-18 white' />Share</Button>
                </span> */}
              </Row>
              <Image src={HPSGenericRecommendationsdetail} responsive className='center-block hpsdetailimg pull-right' />               
              <Row className='nomargin'>                
                  <ul className="hpsdetailcontent">
                    <li><span className='text'>{recommendation.content}</span></li>
                   
                </ul>
              </Row>                
             </Col>:"")}):""
            }
  			</Panel>
  			
    </Col>
  );
};

HpsGenericRecommendationsDetail.propTypes = {
  data: PropTypes.object,
};

export default HpsGenericRecommendationsDetail;
