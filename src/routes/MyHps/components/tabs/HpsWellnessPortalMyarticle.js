import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Label, Image, ButtonToolbar, DropdownButton,InputGroup,Glyphicon , MenuItem,Tab,Row,Nav,NavItem,Panel,FormGroup,ControlLabel,FormControl,FieldGroup } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './HpsGenericRecommendations.scss';
import { browserHistory } from 'react-router';
import artical from '../../../../styles/img/artical.png';
import artical1 from '../../../../styles/img/artical1.png';
import artical2 from '../../../../styles/img/artical2.png';

const HpsWellnessPortalMyarticle = ({
articles,
markFavourite,
favArticles,
viewFavourite,
handleViewFavourite
}) => {
	var showsharebuttons=false;

  return (
    <Col md={12} className="recommendation-container">
      <Row className="panel-heading">
       	<Col md={6}>
       	   	<h1>Articles for me</h1>
       	</Col>
       	<Col md={6}>
       	   	<Row>
							<Col md={8}></Col>	
							
       	   	{/*	<Col md={4}>
		       	   	<FormGroup controlId="formControlsSelect">
					      <FormControl componentClass="select" placeholder="select">
										<option value="select">This Week</option>
										<option value="other">...</option>
					      </FormControl>
					     </FormGroup>
				</Col>
				<Col md={4}>
				    	 <FormGroup>
      <InputGroup>
        <FormControl type="text" />
        <InputGroup.Addon>
          <Glyphicon glyph="search" />
        </InputGroup.Addon>
      </InputGroup>
    </FormGroup>
				    </Col>*/}
				    <Col md={4}>
				    	<Row pull-right>
			       	   	<Col md={8}  className="left-sec"><span>View favourite</span></Col>
			       	   	<Col md={4}  onClick={handleViewFavourite} className="right-sec cursor-pointer"><span>{viewFavourite?<FontAwesome name='star ' className='icon-18' style={{color:'#FFDF00'}}/>:<FontAwesome name='star ' className='icon-18' />}</span></Col>
		         </Row>
				    </Col>
       	   		</Row>
       	   </Col>
       </Row>
       <Row>
					 {  viewFavourite&&favArticles.length?
					  favArticles?_.sortBy(favArticles,"articleId").map((data)=><Col md={6} className="outer-box" onClick={()=>browserHistory.push('/myhps/articleDetails/'+data.articleId)}>
						<Grid fluid className="main-box">
							<Row>
								<Col xs={7} className="inner-box">
									<div className="date">{data.createdAt}</div>
									<div className="heading">{data.articleName}</div>
									<div className="content">
										{/*Since You Have Diabetes And <a>read more...</a>*/}
									</div>
												<div className="content-icon">
																<Row>
																	<Col xs={2}>
																	<span className="icon-box"  style={{background:'#DAA520',border:'0px',marginLeft:'1px'}}><FontAwesome name='star-o' /></span>
																	</Col>
																	<Col onClick={(event)=>{event.stopPropagation();window.open("https://plus.google.com/share?url="+encodeURI("http://hpswellness.com/for"), '_blank')}}  xs={2}>
																			<span className="icon-box" style={{background:'#db4437',border:'0px',marginLeft:'1px'}} ><FontAwesome name='google'/></span>
																	</Col>  
																	<Col onClick={(event)=>{event.stopPropagation();window.open("http://www.facebook.com/sharer.php?u="+encodeURI("http://hpswellness.com/for"), '_blank')}}  xs={2}>
																			<span className="icon-box" style={{background:'#3c5a99',border:'0px',marginLeft:'1px'}} ><FontAwesome name='facebook'/></span>
																	</Col> 
															</Row>
													</div>
								</Col>
								<Col xs={5} className="inner-right-box">
									<Image src={artical} responsive />
								</Col>
							</Row>
						</Grid>
					</Col>):"No Favourite Articles":
						 articles?_.sortBy(articles,"articleId").map((data)=><Col md={6} className="outer-box"  onClick={()=>browserHistory.push('/myhps/articleDetails/'+data.articleId)}>
       			<Grid fluid className="main-box">
       				<Row>
       					<Col xs={7} className="inner-box">
       						<div className="date">{data.createdAt}</div>
       						<div className="heading">{data.articleName}</div>
       						<div className="content">
       							{/*Since You Have Diabetes And <a>read more...</a>*/}
       						</div>
                                         <div className="content-icon">
																				 <Row>
																						<Col onClick={(event)=>{event.stopPropagation();markFavourite(data.articleId)}} xs={2}>
																							{data.isFavorite?<span className="icon-box"  style={{background:'#DAA520',border:'0px',marginLeft:'1px'}}><FontAwesome name='star-o' /></span>
																							:<span className="icon-box"  style={{background:'#db4437',border:'0px',marginLeft:'1px'}}><FontAwesome name='star-o' /></span>
																							}
																						</Col>
																						<Col onClick={(event)=>{event.stopPropagation();window.open("https://plus.google.com/share?url="+encodeURI("https://www.quora.com/What-are-your-thoughts-on-telepathy-or-brain-control"), '_blank')}}  xs={2}>
																								<span className="icon-box" style={{background:'#db4437',border:'0px',marginLeft:'1px'}} ><FontAwesome name='google'/></span>
																						</Col>  
																						<Col onClick={(event)=>{event.stopPropagation();window.open("http://www.facebook.com/sharer.php?u="+encodeURI("https://www.quora.com/What-are-your-thoughts-on-telepathy-or-brain-control"), '_blank')}}  xs={2}>
																								<span className="icon-box" style={{background:'#3c5a99',border:'0px',marginLeft:'1px'}} ><FontAwesome name='facebook'/></span>
																						</Col> 
																		 </Row>
                                          </div>
       					</Col>
       					<Col xs={5} className="inner-right-box">
       						<Image src={artical} responsive />
       					</Col>
       				</Row>
       			</Grid>
       		</Col>):" "
					 }
       </Row>
    </Col>
     
  );
};

HpsWellnessPortalMyarticle.propTypes = {
  data: PropTypes.object,
};

export default HpsWellnessPortalMyarticle;

