import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import FontAwesome from 'react-fontawesome';
import exerciseSpotMarching from '../../../../styles/img/exercise-spot-marching.png';

const ExerciesTabMarkup = ({
      appState,
      data,
      handleShowPlayerModal,
      dots,
      infinite,
      speed,
      slidesToShow,
      slidesToScroll,
}) => {
  const userExerciseTrackings =appState?appState.userExerciseTrackings:null;
  

  var settings = {
    slidesPerRow: 3,
    slidesToShow: 6,
    slidesToScroll:6,
    rows: 2,
    responsive: [
    {
      breakpoint: 478,
      settings: {
        slidesPerRow: 3,
        rows: 2,
        slidesToShow: 5   
      }
    }
    ]
  };
  return (
        <Col className='center-content-exercise fixed-center'> 
         <Slider {...settings}>
          {
             userExerciseTrackings!=null?userExerciseTrackings.map((data)=>
          <Col key={data.exercise.exerciseId} md={4} className='exercise-wrap text-center' onClick={() => handleShowPlayerModal(data)}>
            <Image src={exerciseSpotMarching} responsive className='cursor-pointer' />
            <Col className='header'>
              <Col className='text'>{data.exercise.name}</Col>
              { data.status ? <Col className='status-icon'><FontAwesome name='check-square' className='icon-18 turtle-green' /></Col> : null}
            </Col>
            <Col className='play-icon'><FontAwesome name='play-circle' /></Col>
            <Col className={ data.status ? 'footer-wrap completed pull-left cursor-pointer' : 'footer-wrap pull-left cursor-pointer' }>
              <Col className='text text-left'>Set's</Col>
              <Col className='text-value'>
                <Col className='pull-left'>{data.exercise.setsMin}-{data.exercise.setsMax}</Col>
                <Col className='pull-right'>{data.exercise.durationMin}-{data.exercise.durationMax} {data.exercise.durationUnit}</Col>
              </Col>
            </Col>
          </Col>
          ):<Col>No Schedules For Exercise</Col>
        }
        </Slider>
        </Col>
   );
}
export default ExerciesTabMarkup;