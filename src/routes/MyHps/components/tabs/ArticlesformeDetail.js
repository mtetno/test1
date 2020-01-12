import React from 'react';
import PropTypes from 'prop-types';
import { h5,Col, Label,Row, Image, ButtonToolbar, DropdownButton, MenuItem, Button ,Glyphicon , Tab, Panel, div , h3,h4, span,ControlLabel, InputGroup,FormGroup,FormControl} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Articlesformedetails  from '../../../../styles/img/Articlesformedetails.png';
import HPSmyarticledetail  from '../../../../styles/img/HPSmyarticledetail.png';
import { browserHistory } from 'react-router';

import './HpsGenericRecommendationsDetail.scss';
var header = (
    <div>
      <Row>
      <Col md={6}>
        <h4><FontAwesome name='long-arrow-left'  onClick={()=>browserHistory.push('/myhps/articles/') } className='icon-18 grey cursor-pointer'/> Articles for me</h4>
      </Col>
    { /* <Col md={6}>            
        <Col md={4}>
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
        <Col md={4} className='nopadding'>
              
                  <Col md={8} className="left-sec text-right"><span>View favourite</span></Col>
                  <Col md={4} className="right-sec pull-right"><span><FontAwesome name='star-o' className='icon-18 grey' /></span></Col>
                
        </Col>    
</Col>*/}
      </Row>
    </div>
);
const ArticlesformeDetail = ({
articles,
articleId
}) => {
   return(
   <Col>
   {
   articles && articles.length ? articles.map((article)=>{ return(article.articleId==articleId ? 
   <Col className='center-content-exercise'>
          <Panel  header={header} bsStyle="default">          
            <Col md={12} className="details">
              <Row className='nomargin'>
                <h3></h3>
                <div className="subtitle">{article.articleName}</div>
                <div className='date'>{article.createdAt}</div>
              {/*  <span className='btn-section'>
                  <Button type="submit" className='setreminder blue'><span className='icon-18 white calendar-icon15'></span>Set Reminder </Button>
                  <Button type="submit" className='share blue'><FontAwesome name='share-alt' className='icon-18 white' />Share</Button>
                </span>*/}
              </Row>
              <Image src={HPSmyarticledetail} responsive className='center-block hpsdetailimg pull-right' />
              <Row className='nomargin'>
                <p id="detail">{article.description}</p>
              </Row>
            </Col>
        </Panel>
        
   </Col>:"")}):""
   }
   </Col>);
};

ArticlesformeDetail.propTypes = {
  data: PropTypes.object,
};

export default ArticlesformeDetail;
