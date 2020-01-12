import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import { Modal, Col, Row, Image } from 'react-bootstrap';
import './PlayerModalComponent.scss';
import FontAwesome from 'react-fontawesome';
import noImage from '../../../styles/img/no_image.png';

class AccupressurePointModalComponent extends React.Component {
  render () {
    const { showModal,hideAccPointModal, selectedActivity, markDoneHandler } = this.props;
    return (
      <Modal
          bsSize='large'
          show={showModal}
          onHide={hideAccPointModal}
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
                               <span>Points on {selectedActivity && selectedActivity.name}</span>
                            </div>
                        </Col>
                        {/*<Col md={6} className="pull-right">
                            <Row>
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
                            </Row>
                        </Col>*/}
                      </Row>
                  </Col>
              </Row>
              <Row>
              <Col md={12} className="accupressure-point-wrap">
                {selectedActivity && selectedActivity.subRegions.map((data) => {
                  return (<Col key={selectedActivity.id+data.id} md={4}><Col className="wrapper"><Image style={{height: '150px', margin: '0 auto'}} src={data.image.name?require(`../../../styles/img/Acupressure/${data.image.name}`) : noImage}/>
                  {data.acupressurePoints?data.acupressurePoints.map((point)=>
                  <Col key={point.userAcupressurePointTrackingId}> 
                  {
                      point.status?
                  <span className="redpoint" onClick={() => markDoneHandler(point)} style={{background:"green",left: (Math.random() * (226 - 0)+0).toString()+'px', top: (Math.random() * (160 - 0)+0).toString()+'px'}}></span>
                  :<span className="redpoint" onClick={() => markDoneHandler(point)} style={{left: (Math.random() * (226 - 0)+0).toString()+'px', top: (Math.random() * (160 - 0)+0).toString()+'px'}}></span>
                  }
                  </Col>):" "}</Col>
                </Col>) 
                })}
              </Col>
              </Row>
          </Modal.Body>
        </Modal>
    );
  }
}

export default AccupressurePointModalComponent;