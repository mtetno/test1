import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import { Modal,Col,Row } from 'react-bootstrap';
import './PlayerModalComponent.scss';
import FontAwesome from 'react-fontawesome';

class PlayerModalComponent extends React.Component {
  render () {
    const { showModal, hideModal } = this.props;
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
                               <span>ASTHMA</span>
                            </div>
                        </Col>
                        <Col md={5} className="pull-right">
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
                                        <span>Know More About Asthma</span> <FontAwesome name='long-arrow-right' className='icon-18' />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                      </Row>
                  </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Player
                    autoPlay
                    playsInline
                    poster="/assets/poster.png"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  >
                  <BigPlayButton position="center" />
                  </Player>
                </Col>
                <Col md={6}>
                    <Row>
                      <Col md={7}>
                          <div className="center-block acc-box">
                              <div className="first-line">ACCUPRESSURE POINT</div>
                              <div className="second-line">SHIATSU_S4</div>
                          </div>
                      </Col>
                      <Col md={5}> 
                          <div className="center-block mark-box">
                              <div className="first-line"><FontAwesome name='check-square' className='icon-18 mark-icon' /> MARK AS DONE </div>
                          </div>
                      </Col>
                    </Row>
                </Col>
              </Row>
              <Row>
                  <Col md={12}>
                      <div className="content-heading">DESCRIPTION:</div>
                      <div className="content-descp">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                              text ever since the 15005, when an unknown printer aining passages, and more recently with desktop publishing software like Aldus
                              PageMaker including versions of Lorem Ipsum.
                          </p>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                             text ever since the 15005, when an unknown printer aining passages, and more recently with desktop publishing software like Aldus
                          </p>
                      </div>
                  </Col>
              </Row>
          </Modal.Body>
        </Modal>
    );
  }
}

export default PlayerModalComponent;