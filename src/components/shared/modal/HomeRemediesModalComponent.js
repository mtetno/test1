import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import { Modal,Col,Row,Fade,Image } from 'react-bootstrap';
import './PlayerModalComponent.scss';
import FontAwesome from 'react-fontawesome';
import noImage from '../../../styles/img/no_image.png';


class HomeRemediesModalComponent extends React.Component {
  render () {
    const { showIngredients,showIngre,selectedIngredients,showModal, hideModal, selectedActivity, markDoneHandler,disableMarkAsDone } = this.props;
      return (
      <Modal
          bsSize='large'
          show={showModal}
          onHide={hideModal}
          dialogClassName="player-modal-container player-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">HOME REMEDY</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Row>
                  <Col md={12} className="main-heading">
                      <Row>
                        <Col md={7} className="pull-left">
                            <div className="first-head">
                               <span>{selectedActivity && selectedActivity.homeRemedy.name}</span>
                            </div>
                        </Col>
                        <Col md={5} className="pull-right">
                            <Row>
                                <Col md={12} className="pull-right">
                                    <div className="know-more">
                                        <span>Know More About {selectedActivity && selectedActivity.homeRemedy.name}</span> <FontAwesome name='long-arrow-right' className='icon-18' />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                      </Row>
                  </Col>
              </Row>
              <Row>
                <Col md={6}>
                      <Col md={12}>
                  <div className="content-heading">INGREDIENTS:</div>
                  <div className="content-descp">
                    <ul className="list-inline">{selectedActivity && selectedActivity.homeRemedy.ingredients.map((data)=><li onClick={()=>showIngredients(data.media.name)} className='cursor-pointer' key={data.name}>{data.name},</li>)}</ul>
                    <Fade in={showIngre}>
                    <Image style={{height: '150px',width:'150px', margin: '0 auto'}} src={selectedIngredients?(()=>{try {return(require(`../../../styles/img/homeRemedies/${selectedIngredients}`))} catch(e){return noImage}})(): noImage}/>
                 </Fade>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="content-heading">AVAILABILITY:</div>
                  <div className="content-descp">
                    <p>{selectedActivity && selectedActivity.homeRemedy.availability}</p>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="content-heading">PRESCRIPTION:</div>
                  <div className="content-descp">
                    <p>{selectedActivity && selectedActivity.homeRemedy.prescription}</p>
                  </div>
                </Col>
                </Col>
                <Col md={6}>
                    <Row>
                      <Col md={7}>
                          <Col md={12} style={{padding: '0 5px'}}>
                            <Col className="center-block acc-box">
                                <div className="first-line">DURATION</div>
                                <div className="second-line">{selectedActivity && selectedActivity.homeRemedy.duration} Days</div>
                            </Col>
                          </Col>
                      </Col>
                      {
                      disableMarkAsDone?
                      <Col md={5}> 
                         { selectedActivity && selectedActivity.status ?
                          <div className="center-block mark-box">
                             <div className="first-line"><FontAwesome name='square-o' className='icon-18 mark-icon' /> MARK AS DONE </div>
                           </div>:
                          <div className="center-block mark-box inactive tooltip1 cursor-not-allowed ">
                             <div className="first-line"><FontAwesome name='square-o' className='icon-18 mark-icon' /> MARK AS DONE </div>
                             <span className="tooltiptext">Can not mark as done on postponed dates</span>
                          </div>
                         }
                      </Col>:
                      <Col md={5}> 
                          {selectedActivity && selectedActivity.status ? <div className="center-block mark-box">
                              <div className="first-line"><FontAwesome name='check-square' className='icon-18 mark-icon' /> MARK AS DONE </div>
                          </div> :
                          <div className="center-block mark-box inactive cursor-pointer" onClick={() => markDoneHandler(selectedActivity.id)}>
                              <div className="first-line"><FontAwesome name='square-o' className='icon-18 mark-icon' /> MARK AS DONE </div>
                          </div>}
                      </Col>
                      }
                    </Row>
                </Col>
              </Row>
          </Modal.Body>
        </Modal>
    );
  }
}

export default HomeRemediesModalComponent;