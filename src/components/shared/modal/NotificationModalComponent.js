import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import { Modal,Col,Row,Image } from 'react-bootstrap';
import './NotificationModalComponent.scss';
import FontAwesome from 'react-fontawesome';
import noteimg from '../../../styles/img/note-img.png';
import usersimple from '../../../styles/img/user-simple.png';

class PlayerModalComponent extends React.Component {
  render () {
    const { showModal, hideModal } = this.props;
    return (
      <Modal
          bsSize='large'
          show={false}
          onHide={hideModal}
          dialogClassName="player-modal-container notification-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg"></Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Row>
                  <Col md={12} className="main-heading">
                      <Row>
                        <Col md={7} className="pull-left">
                            <div className="first-head">
                               <span>NOTIFICATIONS</span>
                            </div>
                        </Col>
                        <Col md={5} className="pull-right">
                            <Row>
                                <Col md={12}>
                                    <div className="mark-read">
                                        <span>Mark as all read</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                      </Row>
                  </Col>
              </Row>
              <Row>
                <Col md={12} className="day-row"><span>Today</span></Col>
                <Col md={12} className="row-color">
                  <Row>
                      <Col md={1}><Image src={noteimg} responsive className='center-block' /></Col>
                      <Col md={11}>
                          <div className="right-side heading">Lorem Ipsum<span> 2 hrs ago</span></div>
                          <div className="content-row">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                      </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="day-row day-row-border"><span>LAST 7 DAYS</span></Col>
                <Col md={12} className="row-simple">
                  <Row>
                      <Col md={1}><Image src={usersimple} responsive className='center-block' /></Col>
                      <Col md={11}>
                          <div className="right-side heading">Lorem Ipsum<span> 01:00 pm 10 Nov 2017</span></div>
                          <div className="content-row">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                      </Col>
                  </Row>
                </Col>
                <Col md={12} className="row-simple">
                  <Row>
                      <Col md={1}><Image src={usersimple} responsive className='center-block' /></Col>
                      <Col md={11}>
                          <div className="right-side heading">Lorem Ipsum<span> 01:00 pm 10 Nov 2017</span></div>
                          <div className="content-row">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                      </Col>
                  </Row>
                </Col>
                <Col md={12} className="row-simple">
                  <Row>
                      <Col md={1}><Image src={usersimple} responsive className='center-block' /></Col>
                      <Col md={11}>
                          <div className="right-side heading">Lorem Ipsum<span> 01:00 pm 10 Nov 2017</span></div>
                          <div className="content-row">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                      </Col>
                  </Row>
                </Col>
                <Col md={12} className="row-simple">
                  <Row>
                      <Col md={1}><Image src={usersimple} responsive className='center-block' /></Col>
                      <Col md={11}>
                          <div className="right-side heading">Lorem Ipsum<span> 01:00 pm 10 Nov 2017</span></div>
                          <div className="content-row">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                      </Col>
                  </Row>
                </Col>
              </Row>
          </Modal.Body>
        </Modal>
    );
  }
}

export default PlayerModalComponent;