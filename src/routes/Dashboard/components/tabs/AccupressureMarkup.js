import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import exerciseSpotMarching from '../../../../styles/img/accupressure_hands.png';

const AccupressureMarkup = ({
appState,
data,
handleShowPlayerModal,
}) => {
  const userAcupressureRegions = appState?appState.userAcupressureRegions:null;
  return (
    <Col className='center-content-exercise fixed-center'>
     {
      userAcupressureRegions!=null?userAcupressureRegions.map((data)=> {
        let completed = true;
        data.subRegions.forEach((subregion)=>{
           subregion.acupressurePoints.forEach((point)=>{
            
             if(point.status==0)
             {
               completed = false;
             }
          }
         )
     })
        return (
        <Col key={data.id} md={4} className='exercise-wrap text-center' onClick={() => handleShowPlayerModal(data)}>
          <Image src={exerciseSpotMarching} responsive className='cursor-pointer' />
          <Col className='header'>
            { completed ? <Col className='status-icon'><FontAwesome name='check-square' className='icon-18 turtle-green' /></Col> : null}
          </Col>
          <Col className='play-icon'><FontAwesome name='play-circle' /></Col>
          <Col className={ completed ? 'footer-wrap-accupressure completed pull-left cursor-pointer' :  'footer-wrap-accupressure pull-left cursor-pointer'}>
             <Col className='text-value-accupressure'>
              <Col className='pull-left'>{data.name}</Col>
            </Col>
          </Col>
        </Col>)}): <Col>loading...</Col>
  }
    </Col>
  );
};

AccupressureMarkup.propTypes = {
  data: PropTypes.object,
};

export default AccupressureMarkup;
