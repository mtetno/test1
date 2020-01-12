import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import { Modal, Col, Row, Image } from 'react-bootstrap';
import './PlayerModalComponent.scss';
import FontAwesome from 'react-fontawesome';
import noImage from '../../../styles/img/no_image.png';

class AccupressureVideoModalComponent extends React.Component {
  render () {
    const { showModal, hideAccVideoModal, selectedActivity, markDoneHandler,disableMarkAsDone } = this.props;
    return (
      <Modal
          bsSize='large'
          show={showModal}
          onHide={hideAccVideoModal}
          dialogClassName="player-modal-container player-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">ACCUPRESSURE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Row>
                  <Col md={12} className="main-heading">
                      <Row>
                        <Col md={6} className="pull-left">
                            <div className="first-head">
                               <span>Point - {selectedActivity && selectedActivity.id}</span>
                            </div>
                        </Col>
                        <Col md={6} className="pull-right">
                            {/*<Row>
                                <Col md={6}>
                                    <div className="know-more">
                                        <span>How Accupressure Works </span> <FontAwesome name='volume-up' className='icon-18' />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="know-more">
                                        <span>How to take Accupressure </span> <FontAwesome name='volume-up' className='icon-18' />
                                    </div>
                                </Col>
                            </Row>*/}
                        </Col>
                      </Row>
                  </Col>
              </Row>
              <Row>
                <Col md={9} className="accupressure-point-wrap">
                    <Player
                      autoPlay
                      playsInline
                      poster="/assets/poster.png"
                      src="https://www.youtube.com/watch?v=yAoLSRbwxL8"
                    >
                    <BigPlayButton position="center" />
                    </Player>
                </Col>
                {
                    false?
                    <Col md={3}> 
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
              <Col md={3}>
                  {selectedActivity && selectedActivity.status ? <div className="center-block mark-box">
                      <div className="first-line"><FontAwesome name='check-square' className='icon-18 mark-icon' /> MARK AS DONE </div>
                  </div> :
                  <div className="center-block mark-box inactive cursor-pointer" onClick={() => markDoneHandler(selectedActivity.userAcupressurePointTrackingId)}>
                      <div className="first-line"><FontAwesome name='square-o' className='icon-18 mark-icon' /> MARK AS DONE </div>
                  </div>}
                </Col>
                
                }
              </Row>
          </Modal.Body>
        </Modal>
    );
  }
}

export default AccupressureVideoModalComponent;