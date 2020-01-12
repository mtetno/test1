import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Col, Tabs, Tab, Image, Button, Modal, Row } from 'react-bootstrap';
import './SymptomCheckerModelComponent.scss';
import symtomerCheck2 from '../../../styles/img/symtomerCheck2.png';

const SymptomsChecker = ({
phenoType,
appState,
handleModal,
showModal,
hideModel,
}) => {
  
   const donts=phenoType&&phenoType.dosAndDonts?phenoType.dosAndDonts.donts:null;
   const dos=phenoType && phenoType.dosAndDonts?phenoType.dosAndDonts.dos:{Diet:[],Lifetsyle:[],Diseases:[]};
return (
    <div>
      <Modal show={showModal} onHide={(e) => handleModal(e, false)}>
        <Modal.Body className='container-fluid symptom'>
          <Col md={12}>
            <Row className='inner-body'>
              <Col md={3} className='left-side'>
                <Image src={symtomerCheck2} responsive />
              </Col>
              <Col md={9} className='right-side'>
                   <div className='arrow_box1'>
                     Oops... Manas you need to provide me all the details of this aliment before youcamn tell me about other aliments.
                  </div>
                  <div><Button type="submit" className='custom-btn turtle-green btn btn-default pull-right btn-ok' onClick={this.hideModel}>OK</Button></div>
              </Col>
            </Row>
          </Col>
        </Modal.Body>
      </Modal>
    </div>
  );
};

SymptomsChecker.propTypes = {
  appState: PropTypes.object,
  handleTabSelect: PropTypes.func,
  activeTab: PropTypes.number,
};

export default SymptomsChecker;
