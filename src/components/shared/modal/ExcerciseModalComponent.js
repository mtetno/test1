import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import { Modal,Col,Row } from 'react-bootstrap';
import './PlayerModalComponent.scss';
import FontAwesome from 'react-fontawesome';

class ExcerciseModalComponent extends React.Component {
  render () {
    const { showModal, hideModal, selectedActivity, markDoneHandler,disableMarkAsDone } = this.props;
    return (
      <Modal
          bsSize='large'
          show={showModal}
          onHide={hideModal}
          dialogClassName="player-modal-container player-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">EXERCISE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Row>
                  <Col md={12} className="main-heading">
                      <Row>
                        <Col md={7} className="pull-left">
                            <div className="first-head">
                               <span>{selectedActivity && selectedActivity.exercise.name}</span>
                            </div>
                        </Col>
                        {/*<Col md={5} className="pull-right">
                            <Row>
                                <Col md={5}>
                                  <div className="main-side">
                                    <div className="left-side">
                                      Hear Audio
                                    </div>
                                    <div className="right-side">
                                       <FontAwesome name='volume-up' className='icon-18' />
                                    </div>
                                  </div>
                                </Col>
                                <Col md={7}>
                                    <div className="know-more">
                                        <span>Know More About {selectedActivity && selectedActivity.exercise.name}</span> <FontAwesome name='long-arrow-right' className='icon-18' />
                                    </div>
                                </Col>
                            </Row>
                        </Col>*/}
                      </Row>
                  </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Player
                    autoPlay
                    playsInline
                    poster="/assets/poster.png"
                    src="https://www.youtube.com/watch?v=yAoLSRbwxL8"
                  >
                  <BigPlayButton position="center" />
                  </Player>
                </Col>
                <Col md={6}>
                    <Row>
                      <Col md={7}>
                          <Col md={6} style={{padding: '0 5px'}}>
                            <Col className="center-block acc-box">
                                <div className="first-line">NO OF SETS</div>
                                <div className="second-line">{selectedActivity && selectedActivity.exercise.setsMin}-{selectedActivity && selectedActivity.exercise.setsMax}</div>
                            </Col>
                          </Col>
                          <Col md={6} style={{padding: '0 5px'}}>
                            <Col className="center-block acc-box">
                                <div className="first-line">DURATION</div>
                                <div className="second-line">{selectedActivity && selectedActivity.exercise.durationMin}-{selectedActivity && selectedActivity.exercise.durationMax}</div>
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
                          {selectedActivity && selectedActivity.status ? 
                          <div className="center-block mark-box">
                              <div className="first-line"><FontAwesome name='check-square' className='icon-18 mark-icon' /> MARK AS DONE </div>
                          </div> :
                          <div className="center-block mark-box inactive cursor-pointer" onClick={() => markDoneHandler(selectedActivity.userExerciseTrackingId)}>
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

export default ExcerciseModalComponent;