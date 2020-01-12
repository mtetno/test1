import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Col, Tabs, Tab, Image, Button, Modal, Row } from 'react-bootstrap';
import './DoandDontModalComponent.scss';
import humanAvatar from '../../../styles/img/dos-donts-avatar.png';

const ModalMarkup = ({
phenoType,
appState,
handleModal,
showModal,
}) => {
  
   const donts=phenoType&&phenoType.dosAndDonts?phenoType.dosAndDonts.donts:null;
   const dos=phenoType && phenoType.dosAndDonts?phenoType.dosAndDonts.dos:{Diet:[],Lifestyle:[],Diseases:[]};
return (
    <div>
      <Modal bsSize='large' show={showModal} onHide={(e) => handleModal(e, false)}>
        <Modal.Header closeButton>
          <Modal.Title>DOES & DON'TS</Modal.Title>
        </Modal.Header>
        <Modal.Body className='container-fluid'>
          <Col md={12}>
            <Row className='inner-body'>
              <Col md={3} className='left-side'>
                <Image src={humanAvatar} responsive />
              </Col>
              <Col md={9} className='right-side'>
                <table className='table table-bordered'>
                  <thead>
                    <tr key='title'>
                      <th>Do’s</th>
                      <th>don'ts</th>
                    </tr>
                  </thead>
                  <tbody>
                  {dos.Diet[0]!=null&& donts.Diet.length!=0 && dos.Diet.length!=0&&donts.Diet[0]!=null?<tr><td><h4>Diet</h4></td></tr>:""}
                   {
                     dos.Diet[0]!=null&& donts.Diet.length!=0 && dos.Diet.length!=0&&donts.Diet[0]!=null?
                   dos.Diet.map((data,index)=>
                    donts.Diet[index]!=undefined ? 
                    <tr key={index}>
                      <td key={'dos'+index}><span aria-hidden='true' className='fa fa-check icon-check' />{data}</td>
                      <td key={'donts'+index}><span aria-hidden='true' className='fa fa-times icon-cross' />{donts.Diet[index]}</td>
                    </tr>:" "
                   ):""
                  }
                 {dos.Diseases[0]!=null&& donts.Diseases.length!=0 && dos.Diseases.length!=0&&donts.Diseases[0]!=null?<tr><td><h4>Diseases</h4></td></tr>:""}
                   {dos.Diseases[0]!=null&& donts.Diseases.length!=0 && dos.Diseases.length!=0&&donts.Diseases[0]!=null?
                   dos.Diseases.map((data,index)=>
                    donts.Diseases[index]!=null ? 
                    <tr key={index}>
                      <td key={'dos'+index}><span aria-hidden='true' className='fa fa-check icon-check' />{data}</td>
                      <td key={'donts'+index}><span aria-hidden='true' className='fa fa-times icon-cross' />{donts.Diseases[index]}</td>
                    </tr>:" "
                   ):" "
                  }
                  {dos.Lifestyle[0]!=null&& donts.Lifestyle.length!=0 && dos.Lifestyle.length!=0&&donts.Lifestyle[0]!=null?<tr><td><h4>Lifestyle</h4></td></tr>:""}
                  {
                    dos.Lifestyle[0]!=null&& donts.Lifestyle.length!=0 && dos.Lifestyle.length!=0&&donts.Lifestyle[0]!=null?
                   dos.Lifestyle.map((data,index)=>
                    donts.Lifestyle[index]!=undefined ? 
                    <tr key={index}>
                      <td key={'dos'+index}><span aria-hidden='true' className='fa fa-check icon-check' />{data}</td>
                      <td key={'donts'+index}><span aria-hidden='true' className='fa fa-times icon-cross' />{donts.Lifestyle[index]}</td>
                    </tr>:" "
                   ):""
                  }
                  </tbody>
                </table>
              </Col>
            </Row>
          </Col>
        </Modal.Body>
      </Modal>
    </div>
  );
};

ModalMarkup.propTypes = {
  appState: PropTypes.object,
  handleTabSelect: PropTypes.func,
  activeTab: PropTypes.number,
};

export default ModalMarkup;
